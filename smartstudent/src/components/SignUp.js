import React from 'react';

const Signup = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Sign Up</h1>
        <p>Please enter your details to sign up</p>
      </div>
      <div className="form-group">
        <input type="text" placeholder="Username" />
      </div>
      <div className="form-group">
        <input type="password" placeholder="Password" />
      </div>
      <div className="form-group">
        <input type="email" placeholder="Email" />
      </div>
      <button>Sign Up</button>
    </div>
  );
}

export default Signup;
