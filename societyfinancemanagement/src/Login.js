
import React from 'react';
import './App.css'; // Importing your CSS file for styling

function Login() {
  return (
    
    <div className="App">
      <div className="login-container">
        <div className="login-form">
        <h1>Society Financial Management System</h1>
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;


  