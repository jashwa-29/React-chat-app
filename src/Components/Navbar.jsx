import React from 'react'
import './main.css'

const Navbar = () => {
  return (
    <div className='navbar'>
     <span className='logo'>Chat app</span>
     <div className='user'>
        <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png" alt="" />
        <span>Jashwa</span>
        <button>Login</button>
     </div>
    </div>
  ) 
}

export default Navbar
