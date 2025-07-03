import React from 'react';
import './solutionsDropdown.css';

export default function SolutionsDropdown() {
  return (
    <div className="solutions-dropdown">
      <div className="solution-category">
        <h4>By Industry</h4>
        <ul>
          <li>🏥 Healthcare</li>
          <li>🏫 Education</li>
          <li>💼 Financial Services</li>
          <li>⚖️ Government</li>
        </ul>
      </div>

      <div className="solution-category">
        <h4>By Role</h4>
        <ul>
          <li>👨‍💼 Sales</li>
          <li>💬 Customer Support</li>
          <li>👩‍💻 Developers</li>
          <li>📣 Marketing</li>
        </ul>
      </div>

      <div className="solution-category">
        <h4>Use Cases</h4>
        <ul>
          <li>🎥 Video Conferencing</li>
          <li>🌍 Remote Work</li>
          <li>📢 Webinars & Events</li>
          <li>🗂 Project Collaboration</li>
        </ul>
      </div>
    </div>
  );
}
