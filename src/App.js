import React, { useState, useEffect } from "react";
import Particles from 'react-tsparticles';
import './App.css';
import myImage from './images/my-image.png';
import king from './images/king😹.png'
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
import background from './images/background.png';
import pfp from './images/pfp.png';
import pxxxl from './images/pxxl.png';
import lumina from './images/Lumina.png';
import robot from './images/car.jpg';
import MyTechStack from './stack';
import niger from './images/discover-niger.png';
 

import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

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
  
const pxxl = { app: 'https://pxxl.app' }; // Example URL



useEffect(() => {
  AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
    once: true,
  });
}, []);


  return (
    <div className="background-image">
      <header>
        <div className="nav-container hide">
          <h1>Tech Monarch🤴</h1>
        </div>
        <nav className="center">
  <a href="https://github.com/Omijeh-David">
    <i class="bi bi-github"></i>
  </a>
  <a href="https://x.com/_Tech_Monarch">
    <i class="bi bi-twitter"></i>
  </a>
  <a href="https://www.instagram.com/still_odia/">
    <i class="bi bi-instagram"></i>
  </a>
  <a href="mailto:om2918440@gmail.com">
    <i class="bi bi-envelope-at"></i>
  </a>
</nav>

      </header>
      {/* <div>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: "#000", // Background color
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 5,
            },
            move: {
              enable: true,
              speed: 2,
            },
          },
        }}
      />
    </div> */}

      <section id="hero">
        {/* <div>
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
        </div> */}
        
        

        {/* <img src={myImage} alt="Hero" className="hero-image" /> */}
        <img src={king} alt="Hero" className="hero-image" />
        <h2 style={{ color: 'white', fontSize: '3rem', fontWeight: '1000'}} className="text-arrangement" >
          <b>I am <span>OMIJEH DAVID ODIANONSEN</span></b>
        </h2>
        <p>TECH MONARCH</p>

        {showButtonContainer && (
          <div className="button-container hide">
          <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}  data-aos="fade-up">
            <p>About Me</p>
          </a>
          <a href="#projects" style={{ textDecoration: 'none', color: 'inherit' }}  data-aos="fade-up">
            <p>My Projects</p>
          </a>
          <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}  data-aos="fade-up">
            <p>Contact Me</p>
          </a>
        </div>
        
        )}
      </section>

      <section id="about" style={{ textAlign: 'center', marginTop: '3rem' }}>
        <div>
          <h2 style={{ padding: '1rem', backgroundColor: '#6a11cb', color: 'white', marginBottom: '2rem' }} data-aos="fade-up">About Me</h2>
        </div>
        

        <div className="container">
  <div style={{marginTop: '2rem'}}>
  <h2 className="underline" data-aos="fade-up">I Build Cool Stuff</h2>
<h2 className="underline" data-aos="fade-up">I Code Sometimes</h2>
<h2 className="underline" data-aos="fade-up">I Love Reading</h2>
<h2 className="underline" data-aos="fade-up" >I Play Chess</h2>

  </div>

  <div>
  <img src={pfp} alt="pfp" className="pfp"  data-aos="zoom-in"/>
  </div>

  <div style={{width: '100%', height: '100%', backgroundColor: '#6a11cb', padding: '0.3rem', borderRadius: '0'}} data-aos="fade-up">

  <div style={{width: '100%', height: '100%', backgroundColor: 'black', padding: '0.3rem'}}>
  <div style={{width: '100%', height: '100%', backgroundColor: '#6a11cb', padding: '1rem', color: 'white'}}>
    
    <h3><b>My Top Skills/Languages</b></h3>
    
    <div className="skills-carousel" data-aos="fade-up">
  <div className="skills-track">
    <p className="skills">Chess</p>
    <p className="skills">Javascript</p>
    <p className="skills">Typescript</p>
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

<div style={{backgroundColor: 'white', padding: '1rem', margin: '1rem', border: '1px solid black', borderRadius: '1rem', color: 'black', margin: '2rem'}}  data-aos="fade-up"><a href="#" style={{color: '#4c105d'}}>Download Resume</a></div>

<div>
<br></br>
<h3><b>A little Writeup about myself✨</b></h3>
<p> My name is <span style={{ color: 'black' }}><b>Omijeh David Odianonsen</b></span> also known as The Tech Monarch or Odia, and I'm a 17-year-old tech enthusiast and developer from Edo State, Nigeria. My journey into technology began when I was just 9 or 10 years old, experimenting with Python and Scratch to explore the foundations of coding. Driven by curiosity and a relentless passion for learning, I quickly expanded my skills. </p> <p> By the age of 11, I was building remote-controlled cars and tinkering with electronics, developing an intuitive understanding of how systems work. I even took on fixing broken sockets and household devices, which further fueled my technical ingenuity. At 13, I attended my first embedded systems class, working with ultrasonic sensors, PIR sensors, servos, and other components. Around the same time, I explored 2D animation, adding creative flair to my technical pursuits. </p> <p> At 14, I ventured into web development, starting with the LAMP stack (PHP, Apache, MySQL, and Linux). Soon after, I transitioned to the MERN stack and dove into app development with React Native. This versatility laid the groundwork for my growing interest in artificial intelligence and machine learning (AI/ML), which I began exploring at 16. With consistent effort, I started working on 3D modeling by the time I turned 17, further expanding my skill set into the creative domain. </p> <p> Along this journey, I've built various projects, from websites and applications to interactive AI-powered tools. My dedication to learning and creating has positioned me as a multidisciplinary technologist with experience in software development, embedded systems, and AI/ML. I'm passionate about leveraging technology to solve real-world problems and continuously push the boundaries of what's possible. </p>
<br></br><br></br>
<h3><b>My Tech Stack</b></h3>
<div style={{textAlign: 'left', margin: '2rem'}}>
<h5><b>Frontend:</b></h5>
Languages: HTML, CSS, JavaScript, TypeScript<br></br>
Frameworks: React.js<br></br>
Styling: Tailwind CSS, SCSS<br></br>
<br></br><br></br>
<h5><b>Backend:</b></h5>
Languages: Node.js, PHP<br></br>
Frameworks: Express.js, Laravel<br></br>
Databases:
MySQL, MongoDB
<br></br><br></br>
<h5><b>AI/ML:</b></h5>
Languages: Python
Libraries: TensorFlow, scikit-learn, OpenAI API, Llama<br></br><br></br>
<h5><b>Embedded Systems:</b></h5>

Languages: C++<br></br>
Tools: Arduino IDE
<br></br><br></br>
<h5><b>DevOps/Hosting:</b></h5>
Tools: Git/GitHub, Docker<br></br>
Platforms: Pxxl Space, AWS, Vercel, Truehost
<br></br><br></br>
<h5><b>Design & 3D/2D:</b></h5>
Blender, Tupitube, Photoshop, Illustrator, Canva, Figma
</div>
<br></br>
</div>
   {/* <MyTechStack />    */}



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
        <h2 style={{textAlign: 'center', marginTop: '2rem'}}  data-aos="fade-up"><span><b>My Projects</b></span></h2>
        <p style={{color: 'white'}}  data-aos="fade-up">Over the years, I’ve worked on a variety of projects that reflect my passion for technology, problem-solving, and continuous learning. From web development and software applications to AI-powered tools, each project has been an opportunity to apply my skills, explore new technologies, and contribute to meaningful solutions. Below are some of the key projects I’ve had the privilege of working on.</p>


        {/* <div className="project-cards-container">
  <div className="project-card"  data-aos="fade-up">
    <img src={pfp} alt="Pxxl Space" />
    <h3><b>Pxxl Space (Web Hosting Platform)</b></h3>
    <p>A free web hosting platform supporting popular backend languages with custom cPanel features.</p>
    <a href={pxxl.app} target="_blank" rel="noopener noreferrer">Learn More</a>
  </div>
  
  <div className="project-card"  data-aos="fade-up">
    <img src={pfp} alt="Pxxl Space" />
    <h3><b>AI Chatbot – LuminaAI</b></h3>
    <p>An AI chatbot designed for open-ended, empathetic conversations, supporting multiple languages including Nigerian languages.</p>
    <a href={pxxl.app} target="_blank" rel="noopener noreferrer">Learn More</a>
  </div>
  
  <div className="project-card"  data-aos="fade-up">
    <img src={pfp} alt="Pxxl Space" />
    <h3><b>AI/ML Model Development</b></h3>
    <p>Developed models for AI-powered tools, including image recognition systems and machine learning algorithms.</p>
    <a href={pxxl.app} target="_blank" rel="noopener noreferrer">Learn More</a>
  </div>
</div>
 */}


<div className="project-cards-container">


  
  <div className="project-card" data-aos="zoom-in">
    <div className="card-header">
      <img src={pxxxl} alt="Project Preview" className="project-image" />
      <h2><b>Pxxl Space</b></h2>
    </div>
    <p className="project-description">A Free Web Hosting Platform.</p>

    <div className="project-category">
      <h4>Project Category</h4>
      <div className="tags">
        <span className="tag">Web Hosting</span>
        <span className="tag">JavaScript</span>
        <span className="tag">Full Stack</span>
      </div>
    </div>

    <div className="technologies-used">
      <h4>Technologies Used</h4>
      <div className="tags">
        <span className="tag">TypeScript</span>
        <span className="tag">Node.js</span>
        <span className="tag">JavaScript</span>
        <span className="tag">Express.js</span>
      </div>
    </div>

    <div className="project-links">
      <a href="#" className="btn view-btn">🔗 View</a>
      <a href="#" className="btn github-btn">🐙 GitHub</a>
    </div>
  </div>


  
  <div className="project-card" data-aos="zoom-in">
    <div className="card-header">
      <img src={lumina} alt="Project Preview" className="project-image" />
      <h2><b>LuminaAI</b></h2>
    </div>
    <p className="project-description">An AI chatbot that is extremely versatile and can be customised.</p>

    <div className="project-category">
      <h4>Project Category</h4>
      <div className="tags">
        <span className="tag">JavaScript</span>
        <span className="tag">Full Stack</span>
      </div>
    </div>

    <div className="technologies-used">
      <h4>Technologies Used</h4>
      <div className="tags">
        <span className="tag">Javascript</span>
      </div>
    </div>

    <div className="project-links">
      <a href="#" className="btn view-btn">🔗 View</a>
      <a href="#" className="btn github-btn">🐙 GitHub</a>
    </div>
  </div>


  <div className="project-card" data-aos="zoom-in">
    <div className="card-header">
      <img src={niger} alt="Project Preview" className="project-image" />
      <h2><b>Discover Niger</b></h2>
    </div>
    <p className="project-description">A platform i designed for Niger State Nigeria, where they can get information, history, tourist centers and hotspots.</p>

    <div className="project-category">
      <h4>Project Category</h4>
      <div className="tags">
        <span className="tag">JavaScript</span>
        <span className="tag">Full Stack</span>
      </div>
    </div>

    <div className="technologies-used">
      <h4>Technologies Used</h4>
      <div className="tags">
        <span className="tag">Javascript</span>
        <span className="tag">HTML5</span>
        <span className="tag">CSS3</span>
      </div>
    </div>

    <div className="project-links">
      <a href="#" className="btn view-btn">🔗 View</a>
      <a href="#" className="btn github-btn">🐙 GitHub</a>
    </div>
  </div>


  <div className="project-card" data-aos="zoom-in">
    <div className="card-header">
      <img src={robot} alt="Project Preview" className="project-image" />
      <h2><b>Robot Car</b></h2>
    </div>
    <p className="project-description">A robotic car that can be controlled using our mobile device and can remain autonomous.</p>

    <div className="project-category">
      <h4>Project Category</h4>
      <div className="tags">
        <span className="tag">Embedded Systems</span>
        <span className="tag">Hardware Engineering</span>
      </div>
    </div>

    <div className="technologies-used">
      <h4>Technologies Used</h4>
      <div className="tags">
        <span className="tag">C ++</span>
        <span className="tag">Arduino</span>
      </div>
    </div>

    <div className="project-links">
      <a href="#" className="btn view-btn">🔗 View</a>
      <a href="#" className="btn github-btn">🐙 GitHub</a>
    </div>
  </div>


  
  {/* <div className="project-card">
    <div className="card-header">
      <img src={pfp} alt="Project Preview" className="project-image" />
      <h2>React.js Toast Library</h2>
    </div>
    <p className="project-description">A simple and customizable React toast notification library.</p>

    <div className="project-category">
      <h4>Project Category</h4>
      <div className="tags">
        <span className="tag">Library</span>
        <span className="tag">JavaScript</span>
        <span className="tag">Frontend</span>
      </div>
    </div>

    <div className="technologies-used">
      <h4>Technologies Used</h4>
      <div className="tags">
        <span className="tag">TypeScript</span>
        <span className="tag">Node.js</span>
        <span className="tag">JavaScript</span>
      </div>
    </div>

    <div className="project-links">
      <a href="#" className="btn view-btn">🔗 View</a>
      <a href="#" className="btn github-btn">🐙 GitHub</a>
    </div>
  </div> */}
</div>



      </section>




      <section id="contact">
        <h2 style={{color: 'white', textAlign: 'center', fontSize: '4rem'}}>Let us connect!</h2>
        <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '4rem', gap: '2rem' }}>
  <a href="https://github.com/Omijeh-David">
    <i className="bi bi-github"></i>
  </a>
  <a href="https://x.com/_Tech_Monarch">
    <i className="bi bi-twitter"></i>
  </a>
  <a href="https://www.instagram.com/still_odia/">
    <i className="bi bi-instagram"></i>
  </a>
  <a href="mailto:om2918440@gmail.com">
    <i class="bi bi-envelope-at"></i>
  </a>
</nav>
      </section>
    </div>
  );
}

export default App;
