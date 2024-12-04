import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="quick-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms & Conditions</a>
        <a href="#contact">Contact Us</a>
      </div>
      <p>© 2024 AgriVision AI. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
