import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Farmers Say</h2>
      <div className="testimonial">
        <p>"AgriVision AI helped me choose the right crops and boosted my yield by 30%!"</p>
        <span>- Farmer John</span>
      </div>
      <div className="testimonial">
        <p>"A game-changer for sustainable farming practices."</p>
        <span>- Farmer Maria</span>
      </div>
    </section>
  );
};

export default Testimonials;
