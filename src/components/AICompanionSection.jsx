import React, { useState } from "react";
import "./aiCompanion.css";

export default function AICompanionSection() {
  const [selectedTab, setSelectedTab] = useState("ai");

  const images = {
    ai: "https://media.zoom.com/images/assets/aic%402x.png/Zz1mNjcxZGNmMjNiOGIxMWYwODkxN2ZhY2I0MzJmYWNhNA==",
    meetings: "https://media.zoom.com/images/assets/meetings%402x.png/Zz1mOGE5OWZkMjNiOGIxMWYwOGRjYjMyOGZiMTliOTk4OA==",
    chat: "https://media.zoom.com/images/assets/team-chat%402x.png/Zz1mN2ZhNjhkMjNiOGIxMWYwYTg1ZDJhY2RhYmUzZmUwMQ==",
    whiteboard: "https://media.zoom.com/images/assets/whiteboard%402x.png/Zz1mODhmMzg3YzNiOGIxMWYwYWNjZjU2MmZkZWYwMzBiZg==",
  };

  return (
    <div className="ai-container">
      {/* Tabs */}
      <div className="ai-nav">
        <div
          className={`nav-item ${selectedTab === "ai" ? "active" : ""}`}
          onClick={() => setSelectedTab("ai")}
        >
          ✨ AI Companion
        </div>
        <div
          className={`nav-item ${selectedTab === "meetings" ? "active" : ""}`}
          onClick={() => setSelectedTab("meetings")}
        >
          🎥 Meetings
        </div>
        <div
          className={`nav-item ${selectedTab === "chat" ? "active" : ""}`}
          onClick={() => setSelectedTab("chat")}
        >
          💬 Team Chat
        </div>
        <div
          className={`nav-item ${selectedTab === "whiteboard" ? "active" : ""}`}
          onClick={() => setSelectedTab("whiteboard")}
        >
          📝 Whiteboard
        </div>
      </div>

      {/* Image + Text Section */}
      <div className="ai-content">
        {/* Dynamic Image */}
        <div className="ai-image">
          <img src={images[selectedTab]} alt={selectedTab} />
        </div>

        {/* Text Section (fixed) */}
        <div className="ai-text">
          <h2>Get time back with an AI assistant</h2>
          <p>
            Make more time for work that energizes you with AI Companion. This
            assistant operates in Zoom’s work platform to complete tasks from
            note-taking to agenda-making.
          </p>
          <button className="learn-btn">Learn more</button>
        </div>
      </div>
    </div>
  );
}
