import React from "react";
import "./customerStories.css";
// import flexImg from "../assets/flex-employee.png"; // Replace with your image path
// import flexLogo from "../assets/flex-logo.png";
// import vensureLogo from "../assets/vensure-logo.png";
// import capitalLogo from "../assets/capital-logo.png";
// import mlbLogo from "../assets/mlb-logo.png";
// import viewrailLogo from "../assets/viewrail-logo.png";
// import goodAmericanLogo from "../assets/good-american-logo.png";

export default function CustomerStories() {
  return (
    <div className="customer-container">
      <h2 className="title">Customer success stories</h2>
      <p className="subtitle">
        Don’t just take it from us: Zoom helps connect people better together in the
        boardroom, classroom, operating room, and everywhere in between.
      </p>

      <div className="story-section">
        {/* Left side: image */}
        <div className="story">
          <div className="story-image">
          <img src="	https://media.istockphoto.com/id/1403624093/photo/woman-smiling-at-her-cellphone-at-home-sitting-on-the-floor-against-a-sofa-in-a-bright-living.jpg?s=612x612&w=0&k=20&c=__Xq9whO7lgb94l2HUH9KfAJpg9VMj9GC7xKREUhN78=" alt="Flex Employee using Zoom" />
        </div>
        <div className="story-text">
          <h3>Flex employees use Zoom to communicate globally</h3>
          <p>
            "Communication across our teams is important – it requires a high degree of collaboration and alignment for us to be successful. All of this collaboration and coordination is enabled by the Zoom platform.”
          </p>
          <p className="author">
            – Diofanto Rosales, Vice President, Digital Workplace and IT Infrastructure
          </p>
          <button className="story-button">Explore the story</button>
        </div>

        </div>
        

        {/* Middle content */}
        
        {/* Right side logos */}
        <div className="story-logos">
          <img src="https://flex.com/wp-content/themes/flex-parent/images/logo.svg" className="active" alt="Flex" />
          <img src="https://media.zoom.com/images/assets/vensurehr.jpg/Zz0wNTIxY2NiNjM1ODkxMWYwODljYWVhNTA0ZTA5YjJhMg==" className="images" alt="VensureHR" />
          <img src="https://media.zoom.com/images/assets/us1178-1.jpg/Zz0wNDI3MDdmZTM1ODkxMWYwOGRiZGFlM2I0YTdiMjMwNA==" className="images" alt="MLB" />
          <img src="https://media.zoom.com/images/assets/capital-one.j…/Zz0wNDY4OTUwMjM1ODkxMWYwOWI2ZDgyMTllMDdmMzdkZg==" className="images" alt="Capital One" />
          <img src="https://media.zoom.com/images/assets/viewrail.jpg/Zz0wNDJiMDU1YzM1ODkxMWYwYjY4MzdhMmI4NGMyYWRlYw=="  className="images" alt="ViewRail" />
          <img src="https://media.zoom.com/images/assets/good-american…/Zz0wNDJmZGY4YzM1ODkxMWYwYmNiYjdhMmI4NGMyYWRlYw==" className="images" alt="Good American" />
        </div>
      </div>
    </div>
  );
}
