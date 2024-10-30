import React from "react";
function Projects() {
  const projects = [
    {
      name: "Automatic License Plate Recognition",
      description:
        "Developed using CNN, Python, Django. Achieved 95% accuracy in license plate detection.",
      link: "https://github.com/Travoori/Automatic-License-Plate-Recognition-using-CNN",
    },
    {
      name: "The Goal Game",
      description:
        "React and Node.js based web application with TDD principles, improving maintainability.",
      link: "https://github.com/Travoori/The-goal-game",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
