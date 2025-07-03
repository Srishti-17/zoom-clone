import React from 'react';
import './window.css';

const windowProducts = [
  { name: 'Team Chat', icon: '💬' },
  { name: 'Phone', icon: '📞' },
  { name: 'Docs', icon: '📄' },
  { name: 'Meetings', icon: '🎥' },
  { name: 'Workvivo', icon: '📱' },
  { name: 'Mail & Calendar', icon: '📧' },
  { name: 'Scheduler', icon: '📅' },
  { name: 'Whiteboard', icon: '📝' },
  { name: 'Tasks', icon: '🗂️' },
  { name: 'Contact Center', icon: '🎧' },
  { name: 'Virtual Agent', icon: '🤖' },
  { name: 'Revenue Accelerator', icon: '🚀' },
  { name: 'Webinars', icon: '📺' },
  { name: 'Sessions', icon: '👥' },
  { name: 'Events', icon: '🎟️' },
];

export default function WindowDropdown() {
  return (
    <div className="window-dropdown">
      <h3>Explore top VOOMI products</h3>
      <div className="icon-grid">
        {windowProducts.map((item, index) => (
          <div className="icon-item" key={index}>
            <div className="icon-circle">{item.icon}</div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="window-actions">
        <button className="btn-outline">All VOOMI products</button>
        <button className="btn-filled">Contact sales</button>
      </div>
    </div>
  );
}
