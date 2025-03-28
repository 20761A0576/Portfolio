import React from "react";
import "./About.css";
import profileImage from "../assets/photo.jpg"; // Import your image

function About() {
  return (
    <div className="about-container">
      <img src={profileImage} alt="Profile" className="about-profile" />
      <h1 className="about-title">About Me</h1>
      <p className="about-text">
        I am a passionate React.js Developer with experience in building interactive and efficient web applications.
        My expertise includes frontend development with React.js, backend services with SpringBoot, and database management with MySQL.
      </p>
      <p className="about-text">
        I have worked on multiple projects, including the Insurance Provider Management System and AI-powered applications.
        My goal is to build seamless, user-friendly applications that solve real-world problems.
      </p>
    </div>
  );
}

export default About;
