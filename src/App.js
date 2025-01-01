import React from "react";
import './App.css';
import myImage from './images/my-image.jpeg';


function App() {
  return (
    <div>
      <header>
        <div class="nav-container">
          <h1>Omijeh David Odianonsen</h1>
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="hero">
        <img src={myImage} alt="Hero" className="hero-image" />
        <h2>Welcome to My Portfolio</h2>
        <p>I am a web developer passionate about creating amazing experiences.</p>
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
