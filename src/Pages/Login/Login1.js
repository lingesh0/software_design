import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../Styles/Login/login.css';
import Logo from '../../Assets/Images/logo1.png';

function Login1() {

  const navigate = useNavigate();
   
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterClick = () => {
    navigate('/register');
  }

  const handleLoginClick = () => {
    navigate('/');
  }

  const handleSubmit = (event) => {
    // event.preventDefault();
    if (username === '' || password === '') {
      alert('Please fill out both fields.');
    } else {
      alert(`Logging in as ${username}`);
      // Handle login logic her
    }
    navigate('/');
  };

  return (
    <div className='container'>
      <div className="card">
        {/* <div className='logoo'>
        <img
          src={Logo}
          alt="College Logo"
          className="logo"
        /></div> */}
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
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password" className="label">Password</label>
            <div className="passwordWrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="input"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="passwordIcon" onClick={handleShowPassword}>
                <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
              </span>
            </div>
            <div className="forgotPassword">
              {/* <Link to="/forgot-password">Forgot Password?</Link> */}
            </div>
          </div>
          <center>
            <button onClick={handleLoginClick} type="submit" className="button">Login</button>
          </center>
        </form>
        <div className="registerLink">
          <span>Don't have an account? </span>
          <b className='login-redirect' onClick={handleRegisterClick}>Register here</b>
        </div>
      </div>
    </div>
  );
}

export default Login1;
