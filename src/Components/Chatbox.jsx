import React from 'react'
import './main.css'
import Messages from './Messages'
import Input from './Input'

const Chatbox = ({chatperson , setChatperson}) => {
  return (
    <div className='chatbox'>
     <div className="chat-info">
        <span>{chatperson}</span>
        <div className="chat-info-icons">
        <i class="bi bi-camera-video-fill"></i>
        <i class="bi bi-person-fill"></i>
        </div>
     </div>
     {/* <div className='input'>
     <input type="text" placeholder='Type Something'/>
     <div className="send">
     <i class="bi bi-card-image"></i>
     <button >Send</button>
     </div>
    </div> */}
     <Messages/>
     {/* <Input/> */}
    </div>
  )
}

export default Chatbox
