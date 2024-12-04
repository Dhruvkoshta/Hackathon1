import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <h3>1. Input Your Data</h3>
          <p>Provide details like soil type, weather, and location.</p>
        </div>
        <div className="step">
          <h3>2. AI Analysis</h3>
          <p>Our AI processes the data to make predictions.</p>
        </div>
        <div className="step">
          <h3>3. Get Insights</h3>
          <p>Receive actionable tips and forecasts.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
