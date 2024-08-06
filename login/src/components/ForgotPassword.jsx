// ForgotPassword.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import animationData from '../Animations/password-reset.json';
import '../Styles/forgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setMessage('');

    try {
      // Replace with your API endpoint for password reset
      await axios.post('/api/password-reset', { email });
      setMessage('Password reset instructions sent successfully.');
    } catch (error) {
      setMessage('Error sending reset instructions. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="forgotPasswordContainer">
      <Lottie options={defaultOptions} height={150} width={150} />
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="email">
            <i className="fas fa-envelope"></i> Email Address
          </label>
          <input
            type="email"
            id="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSending}
          />
        </div>
        <button type="submit" className="button" disabled={isSending}>
          {isSending ? 'Sending...' : 'Send Instructions'}
        </button>
      </form>
      {message && <div className="message">{message}</div>}
      <div className="backToLogin">
        <Link to="/">Back to Login</Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
