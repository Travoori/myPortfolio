import React from "react";

function Skills() {
  const skills = [
    "C",
    "C++",
    "Javascript",
    "Java",
    "Python",
    "React",
    "Spring Boot",
    "Firebase",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "AWS EC2",
    "Kubernetes",
    "Guidewire",
    "Jenkins",
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
