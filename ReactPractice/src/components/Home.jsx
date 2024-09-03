import React from "react";
import "./Home.css";
import profileImage from "./assests/hacker.png";

function Home() {
  return (
    <div className="container">
      <div className="info">
        <h1>Web Developer</h1>
        <p>
          Hi, I'm Julius Rentoria. A passionate React Web Developer based in
          Batangas, Philippines.
        </p>
      </div>
      <div className="imageContainer">
        <img src={profileImage} alt="Me" />
      </div>
    </div>
  );
}

export default Home;
