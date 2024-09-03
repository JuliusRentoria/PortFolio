import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure this is imported in your project
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure this is imported in your project
import "./Hello.css"; // Import the custom CSS

function Hello() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link nav-link-home" href="home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-about" href="about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-about" href="projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-contact" href="contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Hello;
