import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">AgriVision AI</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#features">Crop Predictor</a>
        <a href="#dashboard">Dashboard</a>
        <a href="#home">NGO Donation</a>
        <a href="#forum">Community Forum</a>
        <a href="#about">About Us</a>
      </nav>
      <button className="signin-btn">Sign In</button>
    </header>
  );
};

export default Header;
