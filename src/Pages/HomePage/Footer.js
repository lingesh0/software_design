import React from 'react';
import '../../Styles/HomePage/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-left">
          <img src="/path/to/your/logo.png" alt="FlowUpTeam Logo" />
          <p>Join our newsletter to stay up to date on features and releases.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Join now</button>
          </div>
          <p>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
