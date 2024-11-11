import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Texts from './Texts'

const Sidebar = ({chatperson , setChatperson}) => {
  
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <Texts  chatperson={chatperson} setChatperson={setChatperson}/>
    </div>
  )
}

export default Sidebar
