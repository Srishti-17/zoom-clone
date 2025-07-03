import React from 'react';
import './productsDropdown.css';

export default function ProductsDropdown() {
  return (
    <div className="products-dropdown">
      <div className="section">
        <h4>Zoom Workplace</h4>

        <div className="sub-section">
          <h5>Communication</h5>
          <ul>
            <li>📞 Meetings</li>
            <li>💬 Team Chat</li>
            <li>📱 Phone</li>
            <li>📧 Mail & Calendar</li>
            <li>📅 Scheduler</li>
          </ul>
        </div>

        <div className="sub-section">
          <h5>Productivity</h5>
          <ul>
            <li>📄 Docs</li>
            <li>🧠 Whiteboard</li>
            <li>🎥 Clips</li>
            <li>✅ Tasks</li>
            <li>⚙️ Workflow Automation</li>
          </ul>
        </div>

        <div className="sub-section">
          <h5>Spaces</h5>
          <ul>
            <li>🏢 Rooms</li>
            <li>📌 Workspace Reservation</li>
            <li>🖥 Digital Signage</li>
            <li>🛂 Visitor Management</li>
          </ul>
        </div>
      </div>

      <div className="section right-section">
        <h4>Business Services</h4>

        <div className="sub-section">
          <h5>Customer Experience</h5>
          <ul>
            <li>📞 Contact Center</li>
            <li>🧑‍💻 Virtual Agent</li>
            <li>📊 Workforce Engagement</li>
          </ul>
        </div>

        <div className="sub-section">
          <h5>Sales</h5>
          <ul>
            <li>💼 Revenue Accelerator</li>
          </ul>
        </div>

        <div className="sub-section">
          <h5>Marketing</h5>
          <ul>
            <li>📢 Events</li>
            <li>🎙 Sessions</li>
            <li>🎓 Webinars</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
