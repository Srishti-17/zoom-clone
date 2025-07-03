import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Correct import
import './herosection.css';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1>
          Limitless connection<br />and collaboration with<br />Zoom Workplace
        </h1>
        <p>
          The Zoom Workplace platform provides a suite of productivity tools
          built to optimize and evolve the next phase of human connection.
        </p>

        <div className="hero-buttons">
          {/* ✅ Corrected routes */}
          <button className="btn-blue" onClick={() => navigate('/explore')}>Explore products</button>
          <button className="btn-blue" onClick={() => navigate('/contact-sales')}>Contact sales</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="icons-bar">
          <span>👥</span>
          <span>💬</span>
          <span>📊</span>
          <span className="big-icon">🎥</span>
          <span>✨</span>
          <span>📝</span>
          <span>📁</span>
          <span>📞</span>
        </div>

        <div className="video-frame">
          <div className="video-row">
            <div className="person">Ashlee York</div>
            <div className="person">Kristine Arnold</div>
          </div>
          <div className="person big">Darrel Marquez</div>
        </div>
      </div>
    </div>
  );
}
