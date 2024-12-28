import React from "react";
import { CiLink } from "react-icons/ci";
import './CSS/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">
        <CiLink className="contact-icon" /> Connect with Me
      </h2>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/ajay-patmas123/" target="_blank" rel="noopener noreferrer" className="contact-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="contact-logo">
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98H5v14H0v-14zM19.33 8.98c-2.43 0-3.67 1.35-4.3 2.3V8.98h-5v14h5v-7c0-.6.05-1.2.3-1.58.56-.89 1.5-1.42 2.65-1.42 1.87 0 2.65 1.12 2.65 2.77v6.23h5v-7.5c0-4.02-2.15-5.88-5.65-5.88z"/>
          </svg>
          LinkedIn
        </a>
        <a href="https://github.com/ajay-itian" target="_blank" rel="noopener noreferrer" className="contact-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="contact-logo">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.38 7.84 10.9.57.1.78-.25.78-.55v-2c-3.19.69-3.87-1.54-3.87-1.54-.52-1.3-1.28-1.64-1.28-1.64-1.05-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.03 1.76 2.69 1.25 3.34.95.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.5.11-3.13 0 0 .98-.32 3.2 1.2.93-.26 1.92-.39 2.9-.39.98 0 1.97.13 2.9.39 2.22-1.53 3.2-1.2 3.2-1.2.63 1.63.23 2.83.11 3.13.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.4-5.26 5.68.42.37.8 1.1.8 2.23v3.3c0 .3.2.65.8.55C20.71 21.38 24 17.09 24 12c0-6.27-5.23-11.5-12-11.5z"/>
          </svg>
          GitHub
        </a>
        <a href="mailto:ajaypatmas1000@gmail.com" className="contact-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="contact-logo">
            <path d="M12 13.8l11.2-8.4H.8L12 13.8zm0 2.4L0 7.2V21h24V7.2L12 16.2z"/>
          </svg>
          Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
