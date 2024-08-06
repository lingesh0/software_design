import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/Signup/register.css';

function Register() {

  const navigate = useNavigate(); 

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);   
  const [isConPasswordFocused, setIsConPasswordFocused] = useState(false);   

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handleConPasswordFocus = () => {
    setIsConPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const handleConPasswordBlur = () => {
    setIsConPasswordFocused(false);
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
  }
  
  const handleSubmit = (event) => {
    // event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    alert(`Registered as ${username}`);
    navigate('/');
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="username" className="label">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete='off'
              className="input"
              value={username}
              style={{
                border: "none",
                borderBottom: "2px solid transparent",
                borderImage: "linear-gradient(to right, #ff7e5f, #feb47b) 1",
              }}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email" className="label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete='off'
              className="input"
              value={email}
              style={{
                border: "none",
                borderBottom: "2px solid transparent",
                borderImage: "linear-gradient(to right, #ff7e5f, #feb47b) 1",
              }}
              
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password" className="label">Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="input"
                value={password}
                autoComplete='off'
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                style={{
                  border: "none",
                  borderBottom: "2px solid transparent",
                  borderImage: "linear-gradient(to right, #ff7e5f, #feb47b) 1",
                }}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {isPasswordFocused && (
                <div
                  className="password-toggle-icon"
                  onMouseDown={handleMouseDown}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </div>
              )}
            </div>
          </div>
          <div className="formGroup">
            <label htmlFor="confirmPassword" className="label">Confirm Password</label>
            <div className="password-input-container">
            <input
              type={showConPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              className="input"
              autoComplete='off'
              value={confirmPassword}
              onFocus={handleConPasswordFocus}
              onBlur={handleConPasswordBlur}
              style={{
                border: "none",
                borderBottom: "2px solid transparent",
                borderImage: "linear-gradient(to right, #ff7e5f, #feb47b) 1",
                '&:focus':{
                  border: 'none',
                  borderBottom: '2px solid transparent',
                  borderImage: 'linear-gradient(to right, #6a11cb, #2575fc) 1',
                }
              }}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {isConPasswordFocused && (
                <div
                  className="password-toggle-icon"
                  onMouseDown={handleMouseDown}
                  onClick={() => setShowConPassword(!showConPassword)}
                >
                  <FontAwesomeIcon icon={showConPassword ? faEyeSlash : faEye} />
                </div>
              )}
              </div>
          </div>
          <center><button onClick={handleRegisterClick} className="button">Register</button></center>
        </form>
        <div className="loginLink">
          <span>Do you have an account? </span>
          <b className='login-redirect' onClick={handleLoginClick}>Login here</b>
        </div>
      </div>
    </div>
  );
}

export default Register;
