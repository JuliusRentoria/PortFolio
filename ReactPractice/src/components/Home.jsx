import React from "react";
import "./Home.css";
import profileImage from "./assests/hacker.png";
import linkedIn from "./assests/linkedin.png";
import gitHub from "./assests/github.png";

function Home() {
  return (
    <div className="container">
      <div className="imageContainer">
        <img src={profileImage} alt="Me" />
      </div>
      <div className="info">
        <h1>Web Developer</h1>
        <div className="home-info">
          <p>
            Hi, I'm <span>Julius Rentoria</span>. A passionate React Web
            Developer based in Batangas, Philippines.
          </p>
        </div>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/julius-rentoria-12647227b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedIn}
              alt="LinkedIn Profile"
              style={{ cursor: "pointer" }} // Optional: Change cursor to pointer on hover
              className="linkedin"
            />
          </a>
          <a
            href="https://github.com/JuliusRentoria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={gitHub}
              alt="GitHub Profile"
              style={{ cursor: "pointer" }} // Optional: Change cursor to pointer on hover
              className="github"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
