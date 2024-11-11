import React, { useState, useEffect } from 'react';
import './main.css';

const Messages = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputArray, setInputArray] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditId, setCurrentEditId] = useState(null);

  useEffect(() => {
    setInputArray([{ id: inputArray.length, jashwa: 'Yeah doing great how are you...!?' }]);
  }, []);

  function sendBtn() {
    if (inputValue === "") {
      alert("Please enter your text");
    } else {
      if (isEditing) {
        // Update the existing message
        setInputArray((prevArray) =>
          prevArray.map((item) =>
            item.id === currentEditId ? { ...item, jashwa: inputValue } : item
          )
        );
        setIsEditing(false);
        setCurrentEditId(null);
      } else {
        // Add a new message
        setInputArray([...inputArray, { id: inputArray.length, jashwa: inputValue }]);
      }
      setInputValue(''); // Clear input after sending or saving
    }
  }

  function deleteFunc(id) {
    const removedData = inputArray.filter((item) => item.id !== id);
    setInputArray(removedData);
  }

  function editFunc(id) {
    const messageToEdit = inputArray.find((item) => item.id === id);
    setInputValue(messageToEdit.jashwa); // Set the input to the current message content
    setIsEditing(true);
    setCurrentEditId(id);
  }

  return (
    <div className="very-main-msg">
      <div className="messages">
        <div className="main-message">
          <div className="message">
            <div className="message-info">
              <img src="https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530829125?k=6&m=530829125&s=612x612&w=0&h=Z76VH4c_W2aJ6UdUnjuCtLssjlFVNwNEns5VVNpH1Mg=" alt="" />
              <span>13.45</span>
            </div>
            <div className="message-content">
              <p>Hello</p>
            </div>
          </div>

          <div className="message">
            <div className="message-info">
              <img src="https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530829125?k=6&m=530829125&s=612x612&w=0&h=Z76VH4c_W2aJ6UdUnjuCtLssjlFVNwNEns5VVNpH1Mg=" alt="" />
              <span>Just now</span>
            </div>
            <div className="message-content">
              <p>How you doing</p>
            </div>
          </div>

          {inputArray.map((item) => (
            <div key={item.id} className="owner">
          
              <div className="message-content owner-cont">
                <p>{item.jashwa}</p>
                <div className="options">
                  <i className="bi bi-pencil-square" title="Edit" onClick={() => editFunc(item.id)}></i>
                  <i className="bi bi-trash3" title="Delete" onClick={() => deleteFunc(item.id)}></i>
                </div>
            
              </div>
              
            </div>
          ))}
        </div>
      </div>

      <div className="input">
        <input
          type="text"
          placeholder="Enter your text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <div className="send">
          <i className="bi bi-card-image"></i>
          <button onClick={sendBtn}>{isEditing ? "Save" : "Send"}</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
