import React from 'react'

function Message({index,message,gbtLogo}) {
  return (
    <div key={index} className={message.role === 'assistant' ? 'chat bot' : 'chat'}>
        <img className="chatImg" src={gbtLogo} alt="" />
        <p>{message.content}</p>
  </div>
  )
}

export default Message