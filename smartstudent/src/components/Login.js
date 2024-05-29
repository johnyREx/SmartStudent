import React from 'react';

const Login = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Login</h1>
        <p>Please enter your login details</p>
      </div>
      <div className="form-group">
        <input type="text" placeholder="Username" />
      </div>
      <div className="form-group">
        <input type="password" placeholder="Password" />
      </div>
      <button>Login</button>
    </div>
  );
}

export default Login;
