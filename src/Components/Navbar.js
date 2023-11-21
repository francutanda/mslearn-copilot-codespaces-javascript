/* Path: src/components/Navbar.js */
/**
* Navbar component that appears on every page
*/

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img
          src="https://res.cloudinary.com/dq7uyauun/image/upload/v1623769821/Portfolio%20Website%20Assets/Logo_2x.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        &nbsp; Portfolio
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resume">
              Resume
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/matt-krick/"
              target="_blank"
              rel="noopener noreferrer"
              /a>
          </li>
          </ul>
      </div>
    </nav>
  );
};