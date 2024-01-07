import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>Engineered By Ankit Singh With ❤️</p>
      <p>Copyright © {new Date().getFullYear()}</p>
      <p>API Integration From RapidAPI</p>
    </footer>
  );
};

export default Footer;
