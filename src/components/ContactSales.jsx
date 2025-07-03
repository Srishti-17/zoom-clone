import React from 'react';
import './ContactSales.css';
import { Link } from 'react-router';


const ContactSales = () => {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="left-section">
          {/* <Link to ="/contact-sales className=btn-text">Contact Sales</Link> */}
          <p>Zoom keeps you and your team connected wherever you are, so you can get more done, together.</p>
          <p>Fill out the form to get in touch with one of our representatives.</p>

          <h3>Questions? <span>Give us a call</span></h3>

          <select className="country-select">
            <option>Select your country</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
            <option>Other</option>
          </select>
        </div>

        <div className="right-section">
          <form className="contact-form">
            <h2>Tell us a bit about yourself</h2>
            <label>Email<span className="required">*</span></label>
            <input type="email" placeholder="Enter your email" required />

            <label>Nature of inquiry<span className="required">*</span></label>
            <select required>
              <option>-- Select an option --</option>
              <option>Sales Inquiry</option>
              <option>Technical Support</option>
              <option>Partnership</option>
            </select>

            <button type="submit">Continue</button>

            <p className="note">* Required Information</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSales;
