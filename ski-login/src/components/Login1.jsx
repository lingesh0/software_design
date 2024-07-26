import React, { useState } from 'react';
import './login.css';

function Login1() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === '' || password === '') {
      alert('Please fill out both fields.');
    } else {
      alert(`Logging in as ${username}`);
      // You can add further logic here for actual login functionality
    }
  };

  return (
    <div className="container">
      <div className="card">
        <img
          src="./images/logo.png"
          alt="College Logo"
          className="logo"
        />
        <h1 className="title">MANAGE-MATE</h1>
        <h2 className="subtitle">Login</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="username" className="label">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="input"
              autoComplete='off'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password" className="label">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className="input"
              autoComplete='off'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="showPassword">
              
              <label htmlFor="show-password" className="checkboxLabel" onClick={handleShowPassword}>
                {showPassword ? 'Hide Password' : 'Show Password'}
              </label>
            </div>
          </div>
          <center><button type="submit" className="button">Login</button></center>
        </form>
      </div>
    </div>
  );
}

export default Login1;
