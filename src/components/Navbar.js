import React from "react";
// import "../Link.css";
import { Link } from "react-router-dom";
import image from "../images/one.jpg";

export default function Navbar() {
  const navbg = {
    color: "white",
    backgroundColor: "#282c34",
  };
  function home() {
    // console.log("Clicked");
  }
  function about() {
    // console.log("Clicked");
  }
  function education() {
    // console.log("Clicked");
  }
  function personal_profile() {
    // console.log("Clicked");
  }

  function contact() {
    // console.log("Clicked");
  }

  return (
    <>
      <nav
        className="navbar navbar-fixed-top navbar-expand-lg shadow-lg p-2 bg-body-tertiary"
        style={navbg}
      >
        <div
          className="container-fluid"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <Link className="navbar-brand" to="/" style={navbg}>
            <img
              src={image}
              alt="logo"
              style={{
                width: "3rem",
                borderRadius: "25px",
              }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link home"
                aria-current="page"
                href="#home"
                onClick={home}
                style={navbg}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link about"
                id="target_section_about"
                href="#about"
                onClick={about}
                style={navbg}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link edu"
                href="#education"
                onClick={education}
                style={navbg}
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link port"
                href="#personal_profile"
                onClick={personal_profile}
                style={navbg}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link contact"
                onClick={contact}
                href="#contact"
                style={navbg}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
