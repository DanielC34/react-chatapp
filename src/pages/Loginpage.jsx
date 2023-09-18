import React from 'react';

const Login = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Fritter</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Submit</button>
        </form>
        <p>New here? Sign Up</p>
      </div>
    </div>
  );
};

export default Login;