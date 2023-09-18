import React from 'react'
import defimage from '../images/def-image.jpg' 

 const Register = () => {
  return (
      <div className='form-container'>
          <div className="form-wrapper">
              <span className="logo">Fritter</span>
              <span className="title">Register</span>
              <form>
                  <input type="text" placeholder='Name'/>
                  <input type="email" placeholder='Email' />
                  <input type="password" placeholder="Password" />
                  <input style={{display:"none"}} type="file" id="file"/>
                  <label htmlFor="file">
                      <img className="profile-pic" src={defimage} alt="" />
                  <span>Add an avatar</span>
                  </label>
                  <button>Sign Up</button>
              </form>
              <p>Already have an account? Sign In</p>
          </div>
      </div>
  )
}

export default Register;