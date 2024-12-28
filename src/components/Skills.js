import React from "react";
import "./CSS/Skills.css";

const Skills = () => {
  const skills = [
    { name: "ReactJS", color: "#61DAFB", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/react.svg" },
    { name: "Java", color: "#007396", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/java.svg" },
    { name: "Spring Boot", color: "#6DB33F", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/spring.svg" },
    { name: "Hibernate", color: "#59666C", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/hibernate.svg" },
    { name: "MySQL", color: "#00758F", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/mysql.svg" },
    { name: "HTML/CSS", color: "#E34F26", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/html5.svg" },
    { name: "GitHub", color: "#181717", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg" },
    { name: "JavaScript", color: "#F7DF1E", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/javascript.svg" },
  ];

  return (
    <section id="skill" className="skill">
      <h2 className="skill-title">Skills</h2>
      <div className="button-container">
        {skills.map((skill, index) => (
          <div key={index} className="card-skill">
            <button
              className="tech-button"
              style={{ backgroundColor: skill.color }}
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="skill-logo"
              />
              {skill.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
