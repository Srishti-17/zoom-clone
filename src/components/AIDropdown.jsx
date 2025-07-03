import React from 'react';
import './aiDropdown.css';

export default function AIDropdown() {
  return (
    <div className="ai-dropdown">
      <div className="ai-section">
        <h4>Zoom AI Companion</h4>
        <ul>
          <li>✍️ Smart Meeting Summary</li>
          <li>🧠 Chat With Zoom AI</li>
          <li>📋 Whiteboard Assistant</li>
          <li>📄 Email Drafting</li>
          <li>✅ Task Automation</li>
        </ul>
      </div>

      <div className="ai-section">
        <h4>AI Tools</h4>
        <ul>
          <li>📌 AI-powered Scheduling</li>
          <li>🎙 Live Transcription</li>
          <li>🔍 Smart Search</li>
          <li>📊 Analytics Insights</li>
        </ul>
      </div>
    </div>
  );
}
