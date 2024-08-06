import React from 'react';
import '../../Styles/HomePage/Navbar.css';
import logo from '../../Assets/Images/logo1.png';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  
  const navigate = useNavigate();
 
  const handleGetStarted = () => {
    navigate('/login');
  }

  return (  
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="FlowUpTeam Logo"  className='logo-h'/>
      </div>
      <ul className="nav-links">  
        <li><a href="/">Home</a></li>
        <li><a href="/product">Product</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <button className="get-started-btn"
      onClick={handleGetStarted}>Get Started</button>
    </nav>
  );
}  

export default Navbar;
