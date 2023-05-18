import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import image from "../images/one.jpg";

export default function Navbar() {
  const navbg = {
    color: "white",
    backgroundColor: "#282c34",
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg shadow-lg p-2 bg-body-tertiary"
        style={navbg}
      >
        <div className="container-fluid">
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link home"
                aria-current="page"
                to="/"
                style={navbg}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link about"
                id="target_section_about"
                to="/"
                style={navbg}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link edu" to="/" style={navbg}>
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link port" to="/" style={navbg}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link contact" to="/" style={navbg}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
