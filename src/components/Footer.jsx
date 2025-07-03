import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li><a href="#">Voomi Blog</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Media Kit</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        {/* Download */}
        <div className="footer-section">
          <h3>Download</h3>
          <ul>
            <li><a href="#">Voomi Web App</a></li>
            <li><a href="#">Android App</a></li>
            <li><a href="#">iOS App</a></li>
            <li><a href="#">Browser Extension</a></li>
            <li><a href="#">Outlook Add-in</a></li>
          </ul>
        </div>

        {/* Sales */}
        <div className="footer-section">
          <h3>Sales</h3>
          <ul>
            <li><a href="#">Contact Sales</a></li>
            <li><a href="#">Plans & Pricing</a></li>
            <li><a href="#">Request a Demo</a></li>
            <li><a href="#">Events & Webinars</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Developer Support</a></li>
          </ul>
        </div>

        {/* Language & Currency */}
        <div className="footer-section">
          <h3>Language</h3>
          <select>
            <option>English</option>
            <option>Hindi</option>
            <option>French</option>
          </select>
          <h3 style={{ marginTop: '20px' }}>Currency</h3>
          <select>
            <option>US Dollar $</option>
            <option>INR ₹</option>
            <option>Euro €</option>
          </select>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-x-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <p>©2025 Voomi Communications, Inc. All rights reserved. <br/>
          <a href="#">Terms</a> | <a href="#">Privacy</a> | <a href="#">Cookie Preferences</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
