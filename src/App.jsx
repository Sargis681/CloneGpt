import './App.css';
import gbtLogo from "./assets/chatgptLogo.svg";
import userIcon from "./assets/user-icon.png";
import sendIcon from "./assets/send.svg";
import { useRef, useState } from 'react';
import axios from 'axios';
import Message from './components/Message/Message';
import UpperSideTop from './components/UpperSideTop/UpperSideTop';
import LowerSide from './components/LowerSide/LowerSide';

function App() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const formRef = useRef();

   const sendMessageToChatGPT = async () => {
    const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    try {
      const response = await axios.post(apiUrl, {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          ...messages,
          { role: 'user', content: userInput }
        ],
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      });

      const chatGPTResponse = response.data.choices[0].message.content;
      console.log(chatGPTResponse);
      setMessages([...messages, { role: "user", content:  formRef.current.a.value }, { role: 'assistant', content: chatGPTResponse }]);
      formRef.current.a.value =""
      setUserInput('');
    } catch (error) {
      console.error('Error sending message to ChatGPT:', error);
    }
  };



  const handleSendButtonClick =(e) => {
    e.preventDefault();
    const userInputValue = formRef.current.a.value;

   if  (userInputValue.trim() !== '') {
      setMessages([...messages, { role: 'user', content: userInputValue }]);
      sendMessageToChatGPT();

    }
  };

  return (
    <div className="App">
      <div className="sidebar">
        <UpperSideTop />
        <LowerSide />
      </div>
      <div className="main">
        <div className="chats">
          {messages.length > 0 &&
            messages.map((message, index) => (
              <Message key={index} index={index} message={message} gbtLogo={message.role === "assistant" ? gbtLogo : userIcon} />
            ))
          }
        </div>
        <div className="chatFooter">
          <form ref={formRef} onSubmit={handleSendButtonClick} className="inp">
            <input
              type="text"
              placeholder='Send a message'
              name='a'

             
            />
            <button className="send">
              <img src={sendIcon} alt="" />
            </button>
          </form>
          <p>ChatGPT may version</p>
        </div>
      </div>
    </div>
  );
}

export default App;
