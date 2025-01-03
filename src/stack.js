import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const MyTechStack = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle visibility
  };

  return (
    <div>
      <h3><b>My Tech Stack</b></h3>
      <div style={{ textAlign: 'left', margin: '2rem' }}>
        {/* Tech stack content */}
        <div>
          <h5><b>Frontend:</b></h5>
          Languages: HTML, CSS, JavaScript, TypeScript<br />
          Frameworks: React.js<br />
          Styling: Tailwind CSS, SCSS<br /><br />

          <h5><b>Backend:</b></h5>
          Languages: Node.js, PHP<br />
          Frameworks: Express.js, Laravel<br />
          Databases: MySQL, MongoDB<br /><br />

          <h5><b>AI/ML:</b></h5>
          Languages: Python<br />
          Libraries: TensorFlow, scikit-learn, OpenAI API, Llama<br /><br />

          <h5><b>Embedded Systems:</b></h5>
          Languages: C++<br />
          Tools: Arduino IDE<br /><br />

          <h5><b>DevOps/Hosting:</b></h5>
          Tools: Git/GitHub, Docker<br />
          Platforms: Pxxl Space, AWS, Vercel, Truehost<br /><br />

          <h5><b>Design & 3D/2D:</b></h5>
          Blender, Tupitube, Photoshop, Illustrator, Canva, Figma
        </div>

        {/* Conditional rendering for "See More" content */}
        {isVisible && (
          <div className="see-more-content">
            <br />
            <h3><b>A little Writeup about myself✨</b></h3>
            <p>My name is <span style={{ color: 'black' }}><b>Omijeh David Odianonsen</b></span>...</p>
            {/* Full writeup content */}
          </div>
        )}

        <button className="see-more-button" onClick={toggleVisibility}>
          {isVisible ? 'See Less' : 'See More'}
        </button>
      </div>
    </div>
  );
};

export default MyTechStack;
