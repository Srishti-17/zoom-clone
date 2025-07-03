import React from 'react';
import './Explore.css';
import { Navigate, useNavigate } from 'react-router';
const ExploreSection = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="top-bar">
        <div className="left">
          <span>Search</span>
          <span>Support</span>
          <span>0008000503335</span>
          <span>Request a Demo</span>
        </div>
        <div className="right">
          <span>Join</span>
          <span>Host</span>
          <span>Sign In</span>
        </div>
      </div>
      {/* <nav className="navbar">
        <div className="logo">voomi</div>
        <ul className="nav-links">
          <li>Products</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Plans & Pricing</li>
        </ul>
        <div className="nav-buttons">
          <button className="btn-outline">Contact Sales</button>
          <button className="btn-fill">Sign Up Free</button>
        </div>
      </nav> */}
      <div className="hero-content">
        <div className="text-area">
          <h1>
            <span className="blue">One platform</span> for<br />
            limitless human<br /> connection
          </h1>
          <p>
            Drive impact with AI companion, reimagine teamwork,<br />
            strengthen customer relationships, and enable seamless experiences with a single platform.
          </p>
          <button className="btn-fill">View plans & pricing</button>
        </div>
        <div className="highlight-banner">
          <strong>voomi AI Companion</strong> | Empowering you to increase productivity,
          improve team effectiveness, and enhance skills. <a href="#">Learn more</a>
        </div>
        <div className="features-card">
          <h2>voomi Workplace</h2>
          <p>Reimagine teamwork with an AI-powered collaboration platform.</p>
          <div className="features-grid">
            <div>
              <h4>Communication</h4>
              <ul>
                <li>Meetings</li>
                <li>Team Chat</li>
                <li>Phone</li>
                <li>Mail & Calendar</li>
                <li>Scheduler</li>
              </ul>
            </div>
            <div>
              <h4>Productivity</h4>
              <ul>
                <li>Docs</li>
                <li>Whiteboard</li>
                <li>Clips</li>
                <li>Tasks</li>
              </ul>
              <h4>Apps & Integrations</h4>
              <ul>
                <li>App Marketplace</li>
              </ul>
            </div>
            <div>
              <h4>Spaces</h4>
              <ul>
                <li>Rooms</li>
                <li>Workspace Reservation</li>
                <li>Digital Signage</li>
                <li>Visitor Management</li>
              </ul>
              <h4>Employee Engagement</h4>
              <ul>
                <li>Workvivo</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="business-services">
          <h2>Business Services</h2>
          <p>Strengthen customer relationships across sales, marketing and contact center.</p>
          <a href="#">Learn more &gt;</a>

          <div className="features-grid">
            <div>
              <h4>Customer Experience</h4>
              <ul>
                <li>Contact Center</li>
                <li>Virtual Agent</li>
                <li>Workforce Engagement</li>
              </ul>
            </div>
            <div>
              <h4>Marketing</h4>
              <ul>
                <li>Events</li>
                <li>Sessions</li>
                <li>Webinars</li>
              </ul>
            </div>
            <div>
              <h4>Sales</h4>
              <ul>
                <li>Revenue Accelerator</li>
              </ul>
              <h4>Developer Tools</h4>
              <ul>
                <li>APIs & SDKs</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExploreSection;