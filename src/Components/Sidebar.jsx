import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Texts from './Texts'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <Texts/>
    </div>
  )
}

export default Sidebar
