import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import '../Styles/login.css';


function Login1() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState('');

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateFields = useCallback(() => {
    const newErrors = {};

    const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;

    if (!usernameRegex.test(username)) {
      newErrors.username = 'Invalid username or email';
    }

    if (!passwordRegex.test(password)) {
      newErrors.password = 'Invalid password';
    }

    setErrors(newErrors);
  }, [username, password]);

  useEffect(() => {
    validateFields();
  }, [username, password, validateFields]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length > 0 || username === '' || password === '') {
      alert('Please correct the errors before submitting.');
    } else {
      alert(`Logging in as ${username}`);
      // Handle login logic here
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
            <label htmlFor="username" className="label">Username/email</label>
            <input
              type="text"
              id="username"
              name="username"
              className="input"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setFocusedField('username')}
              onBlur={() => setFocusedField('')}
              required
            />
            {errors.username && focusedField === 'username' && (
              <div className="error-message">
                <FontAwesomeIcon icon={faExclamationCircle} /> {errors.username}
              </div>
            )}
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
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField('')}
                required
              />
              {focusedField === 'password' && (
                <span className="passwordIcon" onClick={handleShowPassword}>
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              )}
            </div>
            {errors.password && focusedField === 'password' && (
              <div className="error-message">
                <FontAwesomeIcon icon={faExclamationCircle} /> {errors.password}
              </div>
            )}
            <div className="forgotPassword">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </div>
          <center>
            <button type="submit" className="button">Login</button>
          </center>
        </form>
        <div className="registerLink">
          <span>Don't have an account? </span>
          <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
}

export default Login1;
