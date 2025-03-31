import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { FaGoogleDrive } from 'react-icons/fa';
import './CSS/hero.css';

const Hero = () => {
  const resumeLink = "https://drive.google.com/file/d/1mv-gQAUmyFiIugDsSLsacTIlVpmz3QJC/view?usp=sharing"; // Replace YOUR_RESUME_ID with your actual Google Drive file ID

  return (
    <section id="hero" className="hero">
      <h1 className="hero-title">Ajay Sudam Patmas</h1>
      <h2 className="hero-subtitle">Full Stack Developer</h2>
      <div className="tag-container">
      <a className="heromedia" href="https://github.com/ajay-itian" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className='icon-large' /> 
            </a>
            <a className="heromedia" href="https://www.linkedin.com/in/ajay-patmas123/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className='icon-large' /> 
            </a>
            <a className="heromedia" href="mailto:ajaypatmas1000@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className='icon-large'  /> 
            </a>
            <a href={resumeLink}target="_blank" rel="noopener noreferrer" className="resume-button">
                    <FaGoogleDrive className="google-drive-icon" /> View Resume
            </a>
      </div>
    
     
      <a href="#projects" className="btn">
        <FontAwesomeIcon icon={faCoffee} /> View My Work
      </a>
    </section>
  );
}

export default Hero;