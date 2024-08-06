import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import '../Styles/register.css'; 



function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [errors, setErrors] = useState({});

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const handleConfirmPasswordFocus = () => {
    setIsConfirmPasswordFocused(true);
  };

  const handleConfirmPasswordBlur = () => {
    setIsConfirmPasswordFocused(false);
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  const validateFields = useCallback(() => {
    const newErrors = {};

    // Regex for username: must be alphanumeric and between 3-15 characters
    const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;

    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regex for password: at least one uppercase, one lowercase, one digit, and 6-20 characters
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;

    if (!usernameRegex.test(username)) {
      newErrors.username = 'Username must be 3-15 characters and contain only letters and numbers';
    }

    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!passwordRegex.test(password)) {
      newErrors.password = 'Password must be 6-20 characters, including uppercase, lowercase, and a number';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }

    setErrors(newErrors);
  }, [username, email, password, confirmPassword]);

  useEffect(() => {
    validateFields();
  }, [username, email, password, confirmPassword, validateFields]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      await axios.post('/api/register', { username, email, password });
      alert(`Registered as ${username}`);
      // Redirect or perform other actions after successful registration
    } catch (err) {
      setErrors({ submit: 'Registration failed. Please try again.' });
    }
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
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setFocusedField('username')}
              onBlur={() => setFocusedField('')}
              required
            />
            {focusedField === 'username' && errors.username && (
              <div className="error-message">
                <FontAwesomeIcon icon={faExclamationCircle} />
                <span>{errors.username}</span>
              </div>
            )}
          </div>
          <div className="formGroup">
            <label htmlFor="email" className="label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField('')}
              required
            />
            {focusedField === 'email' && errors.email && (
              <div className="error-message">
                <FontAwesomeIcon icon={faExclamationCircle} />
                <span>{errors.email}</span>
              </div>
            )}
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
                onFocus={() => {
                  handlePasswordFocus();
                  setFocusedField('password');
                }}
                onBlur={() => {
                  handlePasswordBlur();
                  setFocusedField('');
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
            {focusedField === 'password' && errors.password && (
              <div className="error-message">
                <FontAwesomeIcon icon={faExclamationCircle} />
                <span>{errors.password}</span>
              </div>
            )}
          </div>
          <div className="formGroup">
            <label htmlFor="confirmPassword" className="label">Confirm Password</label>
            <div className="password-input-container">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                className="input"
                value={confirmPassword}
                onFocus={() => {
                  handleConfirmPasswordFocus();
                  setFocusedField('confirmPassword');
                }}
                onBlur={() => {
                  handleConfirmPasswordBlur();
                  setFocusedField('');
                }}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {isConfirmPasswordFocused && (
                <div
                  className="password-toggle-icon"
                  onMouseDown={handleMouseDown}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                </div>
              )}
            </div>
            {focusedField === 'confirmPassword' && errors.confirmPassword && (
              <div className="error-message">
                <FontAwesomeIcon icon={faExclamationCircle} />
                <span>{errors.confirmPassword}</span>
              </div>
            )}
          </div>
          {errors.submit && (
            <div className="error-message submit-error">
              <FontAwesomeIcon icon={faExclamationCircle} />
              <span>{errors.submit}</span>
            </div>
          )}
          <center><button type="submit" className="button">Register</button></center>
        </form>
        <div className="loginLink">
          <span>Do you have an account? </span>
          <b><Link to="/">Login here</Link></b>
        </div>
      </div>
    </div>
  );
}

export default Register;


