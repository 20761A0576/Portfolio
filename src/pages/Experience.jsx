import React from "react";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      company: "Slash Mark and AICTE",
      role: "React.js Developer Intern",
      duration: "Jan 2025 - March 2025",
      description:
        "Developed interactive UI components using React.js and integrated REST APIs to fetch and display dynamic content. Collaborated with designers and backend developers to enhance user experience.",
    },
    {
      company: "Jio Platforms Ltd",
      role: "Audio Question Answering Intern",
      duration: "Jan 2024 - April 2024",
      description:
        "Developed an AI-powered model for answering audio-based queries using NLP techniques. Optimized speech-to-text conversion for improved user experience.",
    },
    {
      company: "Slash Mark and AICTE",
      role: "Java Developer Intern",
      duration: "Dec 2022 - Feb 2023",
      description:
        "Designed and developed backend applications using Java and SpringBoot. Built RESTful APIs for seamless data communication and optimized database queries for better performance.",
    },
  ];

  return (
    <div className="experience-container">
      <h1 className="experience-title">My Experience</h1>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h2 className="experience-role">{exp.role}</h2>
            <h3 className="experience-company">
              {exp.company} | {exp.duration}
            </h3>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
