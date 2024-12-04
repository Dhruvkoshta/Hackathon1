import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Empowering Farmers with AI for a Climate-Resilient Future</h1>
      <p>Sustainable crops and smarter farming, one prediction at a time.</p>
      <div className="hero-buttons">
        <button className="btn-primary">Get Started</button>
        <button className="btn-secondary">Learn More</button>
      </div>
    </section>
  );
};

export default Hero;
