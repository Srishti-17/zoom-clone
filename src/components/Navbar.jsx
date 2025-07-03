import React, { useState } from 'react';
import './navbar.css';
import ProductsDropdown from './ProductsDropdown';
import AIDropdown from './AIDropdown';
import SolutionsDropdown from './SolutionsDropdown';
import WindowDropdown from './windowDropdown'; // Capitalize component name
// import Signup from './Signup';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showWindow, setShowWindow] = useState(false);
  const [showSignup,setShowSignup]=useState(false)

  

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">VOOMI</div>

      {/* Links */}
      <ul className="navbar-links">
        <li
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
          className="dropdown-wrapper"
        >
          Products
          {showDropdown && <ProductsDropdown />}
        </li>

        <li
          onMouseEnter={() => setShowAI(true)}
          onMouseLeave={() => setShowAI(false)}
          className="dropdown-wrapper"
        >
          AI
          {showAI && <AIDropdown />}
        </li>
        <li
          onMouseEnter={() => setShowSolutions(true)}
          onMouseLeave={() => setShowSolutions(false)}
          className="dropdown-wrapper"
        >
          Solutions
          {showSolutions && <SolutionsDropdown />}
        </li>

        {/* <li>Resources</li> /// Pending 
        <li>Pricing</li> */}
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        <span className="icon">🔍</span>
        <span className="link">Support</span>
        <span className="link">Meet ▾</span>
{/*         
      {showSignup && (
        <div className="signup-modal-overlay" onClick={() => setShowSignup(false)}>
          <div className="signup-modal" onClick={(e) => e.stopPropagation()}>
            <Signup /> */}
    {/* </div> */}
  {/* </div>
)} */}


        <button className="btn-outline">Contact Sales</button>
        <button className="btn-filled">Sign Up Free</button>

        <span
          className="dots"
          onMouseEnter={() => setShowWindow(true)}
          onMouseLeave={() => setShowWindow(false)}
        >
          ⋮⋮
          {showWindow && <WindowDropdown />}
        </span>
      </div>
    </nav>
  );
}