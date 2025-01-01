import React from "react";
import './App.css';
import myImage from './images/my-image.png';
import blenderImage from './images/blender.png';

function App() {
  return (
    <div>
      <header>
        <div className="nav-container">
          <h1>Omijeh David Odianonsen</h1>
        </div>
        <nav>
          <a href="#about">
            <i className="bi bi-github"></i>
          </a>
          <a href="#projects">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#contact">
            <i className="bi bi-instagram"></i>
          </a>
        </nav>
      </header>

      <section id="hero">

        <div>
          <img src={blenderImage} alt="Instagram" className="floating-icon" />
          <img src={blenderImage} alt="Instagram" className="floating-icon" />
          <img src={blenderImage} alt="Instagram" className="floating-icon" />
          <img src={blenderImage} alt="Instagram" className="floating-icon" /><img src={blenderImage} alt="Instagram" className="floating-icon" /><img src={blenderImage} alt="Instagram" className="floating-icon" /><img src={blenderImage} alt="Instagram" className="floating-icon" />
        </div>


        <img src={myImage} alt="Hero" className="hero-image" />
        <h2 style={{ color: 'white', fontSize: '3rem' }}>
          I am <span>OMIJEH DAVID ODIANONSEN</span>
        </h2>
        {/* <p>I am a web developer passionate about creating amazing experiences.</p> */}
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>Write a short bio here.</p>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <p>Showcase your work here.</p>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: your-email@example.com</p>
      </section>
    </div>
  );
}

export default App;
