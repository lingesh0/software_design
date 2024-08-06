import React from 'react';
import '../../Styles/HomePage/Testimonial.css';

function Testimonial() {
  return (
    <section className="testimonial">
      <h2 className='txt'>TESTIMONIALS</h2>
      <p className='para'>We believe FlowUp is the best tool out there. But, listen to our happy clients.</p>

      <div className="testimonial-card">
        <div className="card-left">
          <div className="percentage">75.54%</div>
          <p>Team satisfaction improvement</p>
        </div>
        <div className="card-right">
          <div className="rating">★★★★★</div>
          <p>"I'm using FlowUp Team to manage my team of accountants and it has been a game changer."</p>
          <p>Name Surname</p>
          <p>Position, Company name</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
