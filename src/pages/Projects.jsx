import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Insurance Provider Management System",
      description: "A full-stack Java application for managing insurance providers with secure authentication and data persistence.",
      techStack: "SpringBoot, React.js, MySQL",
      link: "#"
    },
    {
      title: "To-Do List Web App",
      description: "A dynamic To-Do List application with CRUD functionality and interactive UI using React.js and Local Storage.",
      techStack: "React.js, Local Storage",
      link: "#"
    },
    {
      title: "Fresh Harvest Market",
      description: "A fully functional e-commerce platform for fresh produce shopping with user authentication and a cart system.",
      techStack: "HTML, CSS, JavaScript, SQL",
      link: "#"
    },
    {
      title: "ATM Interface",
      description: "A console-based ATM simulator with secure authentication and transaction management using JDBC.",
      techStack: "Java, JDBC, SQL",
      link: "#"
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <p className="project-tech">{project.techStack}</p>
            <a href={project.link} className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
