import React from 'react';
import { FaGithub } from 'react-icons/fa'; 
import './CSS/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Rent Car Project",
      description: "The Spring Rent Car Project is a comprehensive car rental application built using Spring Boot. It provides a seamless platform for users to browse, book, and manage car rentals. The project features role-based access control (e.g., Admin and Customer roles), JWT-based authentication, and an intuitive API for managing cars, customers, and rental bookings. It uses MySQL for data persistence and is designed for scalability and ease of deployment. Perfect for learning or deploying a robust car rental service.",
      link: "https://github.com/your-username/ecommerce-app",
    
    },
    {
      title: "Banking App",
      description: "The Banking App is a robust web-based banking application developed using Spring Boot and React.js. It offers features like account management, transactions (credit/debit), user roles (Admin/Employee), and secure JWT-based authentication. The application integrates MySQL as its database and provides a user-friendly frontend for seamless interaction. Designed to demonstrate secure and efficient banking operations, it's a complete solution for modern banking needs.",
      link: "https://github.com/ajay-itian/Banking_App",
     
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaGithub className="icon" /> GitHub
              </a>
            
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
