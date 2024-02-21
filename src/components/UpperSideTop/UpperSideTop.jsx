import React from 'react'
import addBtn from "../../assets/add-30.png";
import msgIcon from "../../assets/message.svg";


function UpperSideTop() {
  return (
    <div className="upperSide">
          <div className="upperSideTop">
            <img width={"25px"} src="https://static.vecteezy.com/system/resources/previews/022/841/114/non_2x/chatgpt-logo-transparent-background-free-png.png" alt="" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn"><img src={addBtn} alt="" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Query" />what is programming?</button>
            <button className="query"><img src={msgIcon} alt="Query" />How to use an API</button>
          </div>
        </div>
  )
}

export default UpperSideTop