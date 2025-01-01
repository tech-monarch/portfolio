import React from "react";
import './App.css';
import myImage from './images/my-image.png';
import blender from './images/blender.png';
import c from './images/c.png';
import css3 from './images/css3.png';
import html5 from './images/html5.png';
import js from './images/js.png';
import mysql from './images/mysql.png';
import node from './images/node.png';
import php from './images/php.png';
import python from './images/python.png';
import pytorch from './images/pytorch.png';
import ps from './images/ps.png';
import react from './images/react.png';
import tensorflow from './images/tensorflow.png';

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
        <img src={blender} alt="Blender" className="floating-icon" />
        <img src={c} alt="C" className="floating-icon1" />
        <img src={css3} alt="CSS3" className="floating-icon2" />
        <img src={html5} alt="HTML5" className="floating-icon3" />
        <img src={js} alt="JavaScript" className="floating-icon4" />
        <img src={mysql} alt="MySQL" className="floating-icon5" />
        <img src={node} alt="Node.js" className="floating-icon6" />
        <img src={php} alt="PHP" className="floating-icon7" />
        <img src={ps} alt="Photoshop" className="floating-icon8" />
        <img src={python} alt="Python" className="floating-icon9" />
        <img src={pytorch} alt="PyTorch" className="floating-icon10" />
        <img src={react} alt="React" className="floating-icon11" />
        <img src={tensorflow} alt="TensorFlow" className="floating-icon12" />
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
