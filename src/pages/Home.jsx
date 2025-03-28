import React from "react";
import { Link } from "react-router-dom";
import SkillBadge from "../components/SkillBadge";
import "./Home.css";
import profileImage from "../assets/photo.jpg"; // Import profile image

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <img src={profileImage} alt="Profile" className="home-profile" />
        <h1 className="home-title">Welcome to My Portfolio</h1>
        <p className="home-text">
          I'm a <span className="highlight">React.js Developer</span> passionate about building interactive UIs and modern web applications.
        </p>
        
        <div className="home-skills">
          <SkillBadge skill="React.js" />
          <SkillBadge skill="JavaScript" />
          <SkillBadge skill="SpringBoot" />
          <SkillBadge skill="MySQL" />
        </div>

        <div className="home-buttons">
          <Link to="/projects" className="btn primary">View My Projects</Link>
          <Link to="/contact" className="btn secondary">Contact Me</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
