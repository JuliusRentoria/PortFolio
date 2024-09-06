import React from "react";
import "./About.css"; // Import the custom CSS for styling
import img from "./assests/hacker.png";
import html from "./assests/html-5.png";
import css from "./assests/css-3.png";
import js from "./assests/js (1).png";
import nodejs from "./assests/nodejs.png";
import react from "./assests/react.png";

function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={img} alt="img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi there! I'm Julius Rentoria, a web developer who thrives on
              creativity and innovation. I specialize in front-end and back-end
              technologies, including JavaScript, React.js, and Node.js. My goal
              is to craft digital experiences that not only look great but
              function flawlessly. Whether I'm developing a full-stack web
              application or designing a responsive user interface, I'm always
              eager to take on new challenges and bring ideas to life!
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skills-title">
              <h2>Skills</h2>
            </div>
            <div className="skills">
              <div className="html">
                <img src={html} alt="HTML" />
              </div>
              <div className="css">
                <img src={css} alt="CSS" />
              </div>
              <div className="skill">
                <img src={js} alt="JavaScript" />
              </div>
              <div className="skill">
                <img src={react} alt="React Js" />
              </div>
              <div className="skill">
                <img src={nodejs} alt="Node Js" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
