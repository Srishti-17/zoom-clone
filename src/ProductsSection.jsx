import React, { useState } from "react";
import "./products.css";

const workplaceProducts = [
  { name: "Meetings", icon: "📹" },
  { name: "Team Chat", icon: "💬" },
  { name: "Phone", icon: "📞" },
  { name: "Mail and Calendar", icon: "📧" },
  { name: "Scheduler", icon: "📅" },
  { name: "Docs", icon: "📄" },
  { name: "Whiteboard", icon: "📝" },
  { name: "Clips", icon: "🎞️" },
  { name: "Tasks", icon: "🗒️" },
  { name: "Workflow Automation", icon: "🔄" },
  { name: "Rooms", icon: "🏢" },
  { name: "Workspace Reservation", icon: "📌" },
  { name: "Digital Signage", icon: "🖥️" },
  { name: "Visitor Management", icon: "🪪" },
  { name: "Workvivo", icon: "📲" },
];

const businessServices = [
  { name: "Contact Center", icon: "📞" },
  { name: "Virtual Agent", icon: "🧠" },
  { name: "Workforce Engagement", icon: "🧑‍🤝‍🧑" },
  { name: "Revenue Accelerator", icon: "🚀" },
  { name: "Events", icon: "🎫" },
  { name: "Sessions", icon: "👥" },
  { name: "Webinars", icon: "🗓️" },
];

export default function ProductsSection() {
  const [selectedTab, setSelectedTab] = useState("workplace");

  const displayedProducts = selectedTab === "workplace" ? workplaceProducts : businessServices;

  return (
    <div className="products-container">
      <h2 className="title">Explore all products</h2>

      {/* Buttons */}
      <div className="btn-group">
        <button
          className={selectedTab === "workplace" ? "active" : ""}
          onClick={() => setSelectedTab("workplace")}
        >
          Zoom Workplace
        </button>
        <button
          className={selectedTab === "business" ? "active" : ""}
          onClick={() => setSelectedTab("business")}
        >
          Business Services
        </button>
      </div>

      {/* Product Icons */}
  
      <div className="icons-grid">
        {displayedProducts.map((item, index) => (
          <div className="product-item" key={index}>
            <div className="icon-circle">{item.icon}</div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Product highlights</h2>
        <p>
          Discover top performers that work together to help your team get more
          done and stay connected.
        </p>
      </div>
    </div>
  );
}
