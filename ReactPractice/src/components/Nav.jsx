import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Nav.css"; // Import the custom CSS

function Hello() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="nav-link nav-link-brand" href="#home">
          Julius.dev
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-white bg-black"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Julius.dev
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link nav-link-home" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-about" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-projects" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-contact" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Hello;
