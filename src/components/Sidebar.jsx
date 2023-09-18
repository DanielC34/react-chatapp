import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import ChatList from '../components/ChatList'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar />
      <SearchBar />
      <ChatList />
    </div>
  )
}

export default Sidebar;