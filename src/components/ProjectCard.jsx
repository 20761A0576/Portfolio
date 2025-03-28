import React from "react";
import '../App.css'

function ProjectCard({ title, description, techStack, link }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-4">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
      <p className="text-sm text-gray-500 mt-2">Tech Stack: {techStack}</p>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          View Project
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
