import React, { useState, useEffect } from "react";
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
import pfp from './images/pfp.png';

function App() {
  const [showButtonContainer, setShowButtonContainer] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (window.scrollY > heroSection.offsetTop) {
        setShowButtonContainer(false);
      } else {
        setShowButtonContainer(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

        {showButtonContainer && (
          <div className="button-container">
            <p>About Me</p>
            <p>My Projects</p>
            <p>Contact Me</p>
          </div>
        )}
      </section>

      <section id="about" style={{ textAlign: 'center', marginTop: '3rem' }}>
        <div>
          <h2 style={{ padding: '1rem', backgroundColor: '#4B0082', color: 'white', marginBottom: '2rem' }}>About Me</h2>
        </div>
        

        <div className="container">
  <div style={{marginTop: '2rem'}}>
  <h2 className="underline">I Build Cool Stuff</h2>
<h2 className="underline">I Code Sometimes</h2>
<h2 className="underline">I Love Reading</h2>

  </div>

  <div>
  <img src={pfp} alt="pfp" className="pfp" />
  </div>

  <div style={{width: '100%', height: '100%', backgroundColor: '#6a11cb', padding: '0.3rem', borderRadius: '0'}}>

  <div style={{width: '100%', height: '100%', backgroundColor: 'black', padding: '0.3rem'}}>
  <div style={{width: '100%', height: '100%', backgroundColor: '#6a11cb', padding: '1rem', color: 'white'}}>

    <h3><b>My Top Skills/Languages</b></h3>
    
    <div className="skills-carousel">
  <div className="skills-track">
    <p className="skills">Chess</p>
    <p className="skills">Javascript</p>
    <p className="skills">React Native</p>
    <p className="skills">Php</p>
    <p className="skills">Typescript</p>
    <p className="skills">C++</p>
    <p className="skills">Node.js</p>
    <p className="skills">Python</p>
    <p className="skills">3D Animation</p>
    <p className="skills">Graphics Design</p>
    <p className="skills">React</p>

    {/* Duplicate the skills for seamless scrolling */}
    <p className="skills">Chess</p>
    <p className="skills">Javascript</p>
    <p className="skills">React Native</p>
    <p className="skills">Php</p>
    <p className="skills">Typescript</p>
    <p className="skills">C++</p>
    <p className="skills">Python</p>
    <p className="skills">3D Animation</p>
    <p className="skills">Graphics Design</p>
    <p className="skills">React</p>
    <p className="skills">Chess</p>
    <p className="skills">Javascript</p>
    <p className="skills">React Native</p>
    <p className="skills">Php</p>
    <p className="skills">Typescript</p>
    <p className="skills">C++</p>
    <p className="skills">Node.js</p>
    <p className="skills">Python</p>
    <p className="skills">3D Animation</p>
    <p className="skills">Graphics Design</p>
    <p className="skills">React</p>
    <p className="skills">Chess</p>
    <p className="skills">Javascript</p>
    <p className="skills">React Native</p>
    <p className="skills">Php</p>
    <p className="skills">Typescript</p>
    <p className="skills">C++</p>
    <p className="skills">Node.js</p>
    <p className="skills">Python</p>
    <p className="skills">3D Animation</p>
    <p className="skills">Graphics Design</p>
    <p className="skills">React</p>
  </div>
</div>

<br></br>
<br></br>
<h3><b>A little Writeup about myself✨</b></h3>
<p>My name is <span style={{color: 'black'}}><b>OMIJEH DAVID ODIANONSEN</b></span>, I'm 17 years old and I'm from EDO State, Nigeria. I started coding when i was about 9 or 10 years old with simple python and scratch. With the curiousity, passion and drive to know more in tech and the world at whole, i became invested in tech and at a young age of 11 i started building rc cars and playing around with electronics, and i even started fixing up spoilt sockets and devices at home, and about 13 years old, i attended my first embedded systems class and i worked with ultrasonic sensors, PIRs, servos, PIRs and a lot of other basic components, I also started 2d amimation...  <br></br>
At 14 years, i started web development with php(LAMP Stack), then after a while, i started learning MERN stack also and learnt APP development with React-Native. Later on I decided to move into AI/ML when i was about 16 and kept growing and sometime when i was 17 years old, i started 3d modelling... 
</p>

    



</div>

</div>

  </div>

  {/* <div>
    <p>About Me</p>
    <p>My Projects</p>
    <p>Contact Me</p>
  </div> */}
</div>

      </section>

      <section id="projects">
        <h2><span>My Projects</span></h2>
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
