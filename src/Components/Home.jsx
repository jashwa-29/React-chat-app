import React from 'react'
import Sidebar from './Sidebar'
import Chatbox from './Chatbox'
import './main.css'

const Home = () => {
  return (
    <div className='Home'>
      <div className="container">
        <Sidebar/>
       <Chatbox/>
      </div>
    </div>
  )
}

export default Home
