import React, { useState } from 'react'
import './main.css'
// import Message from './Message'

const Messages = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputArray, setInputArray] = useState([]);
  
    function sendBtn() {
      // setInputArray([...inputArray, { id: inputArray.length, jashwa: inputValue }]);
      // setInputValue(''); // Clear input after sending
      
     if (inputValue === "") {
      alert("please enter your text")
     } else if (inputValue === null){
      alert("please enter your text")
     }
     else{
      setInputArray([...inputArray, { id: inputArray.length, jashwa: inputValue }]);
      setInputValue(''); // Clear input after sending
     }


    }
  
    function deleteFunc(id) {
      let removedData = inputArray.filter((item) => item.id !== id);
      setInputArray(removedData);
    }


  return (
    <div className="very-main-msg">

   
    <div className='messages'>

  
{/* <div> */}

<div className='main-message'>
<div className='message'>
     <div className="message-info">
<img src="https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530829125?k=6&m=530829125&s=612x612&w=0&h=Z76VH4c_W2aJ6UdUnjuCtLssjlFVNwNEns5VVNpH1Mg=" alt="" />
<span>13.45</span>
     </div>
     <div className="message-content">
         <p>Hello</p>
     </div>
   </div>

   <div className='message'>
     <div className="message-info">
<img src="https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530829125?k=6&m=530829125&s=612x612&w=0&h=Z76VH4c_W2aJ6UdUnjuCtLssjlFVNwNEns5VVNpH1Mg=" alt="" />
<span>Just now</span>
     </div>
     <div className="message-content">
         <p>How you doing</p>
     </div>
   </div>
   <div className='owner'>
     <div className="message-content owner-cont">
         <p>Hello</p>
         <i class="bi bi-trash3"></i>
     </div>
 
   </div>



   {inputArray.map((item) => (
        <div key={item.id} className='owner'>
          <div className="message-content owner-cont">
          <p>{item.jashwa}</p>
          <i class="bi bi-trash3" onClick={() => deleteFunc(item.id)}></i>
                    {/* // <button onClick={() => deleteFunc(item.id)}>Delete</button> */}
          </div>

        </div>
      ))}

    </div>
    
           
    </div>

    <div className='input'>

    <input type="text" placeholder="Enter your text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
<div className="send">
<i class="bi bi-card-image"></i>
<button onClick={sendBtn} >Send</button>
</div>
</div> 
    </div>
  )
}


export default Messages
