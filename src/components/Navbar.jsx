import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Fritter</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/18147352/pexels-photo-18147352/free-photo-of-colorful-macaw-parrot.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="" />
        <span>Danny</span>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar;
