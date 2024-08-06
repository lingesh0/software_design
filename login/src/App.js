// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login1 from './components/Login1';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import './Styles/login.css';
import './Styles/register.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login1 />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
