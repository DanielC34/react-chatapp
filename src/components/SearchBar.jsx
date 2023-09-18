import React from 'react'

export const SearchBar = () => {
  return (
    <div className='search'>
      <div className="search-form">
        <input type="text" placeholder="Search user"/>
      </div>
      <div className="user-chat">
        <img src="https://images.pexels.com/photos/18241943/pexels-photo-18241943/free-photo-of-fashion-red-people-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="" />
        <div className="user-chat-info">
          <span>Lia</span>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;
