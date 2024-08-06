import React from 'react';
import '../../Styles/HomePage/NewsletterForm.css';

function NewsletterForm() {
  return (
    <div className="newsletter-form">
      <div className="form-content">
        <h2>Get to know us more. Join our newsletter.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Suspendisse varius enim in eros elementum tristique.</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Join now</button>
        </form>
        <p>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</p>
      </div>
    </div>
  );
}

export default NewsletterForm;

