import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features" id="features">
      <h2>What Can AgriVision AI Do for You?</h2>
      <div className="feature-cards">
        <div className="card">
          <h3>Crop Prediction</h3>
          <p>Predict the best crops for your region and conditions.</p>
        </div>
        <div className="card">
          <h3>Farming Tips</h3>
          <p>Get personalized farming techniques to increase yield.</p>
        </div>
        <div className="card">
          <h3>Impact Tracker</h3>
          <p>Visualize your contribution to sustainability goals.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
