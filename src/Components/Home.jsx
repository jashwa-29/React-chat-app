import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Chatbox from './Chatbox'
import './main.css'

const Home = () => {
  const [chatperson , setChatperson]=useState('Jane')
  return (
    <div className='Home'>
      <div className="container">
        <Sidebar chatperson={chatperson} setChatperson={setChatperson}/>
       <Chatbox chatperson={chatperson} setChatperson={setChatperson}/>
      </div>
    </div>
  )
}

export default Home
