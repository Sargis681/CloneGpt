// // gpt.js
// import axios from 'axios';
// import setMessages from "../App"

// const sendMessageToChatGPT = async (setMessages, messages, formRef, userInput) => {
//     console.log(setMessages);
//   const apiKey = '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';
//   const apiUrl = 'https://api.openai.com/v1/chat/completions';

//   try {
//     const response = await axios.post(apiUrl, {
//       model: 'gpt-3.5-turbo',
//       messages: [
//         { role: 'system', content: 'You are a helpful assistant.' },
//         ...messages,
//         { role: 'user', content: userInput }
//       ],
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiKey}`,
//       },
//     });

//     const chatGPTResponse = response.data.choices[0].message.content;
//     console.log(chatGPTResponse);
//     setMessages([...messages, { role: "user", content: formRef.current.a.value }, { role: 'assistant', content: chatGPTResponse }]);
//     // formRef.current.a.value = "";
//   } catch (error) {
//     console.error('Error sending message to ChatGPT:', error);
//   }
//   return
// };

// export default sendMessageToChatGPT;
