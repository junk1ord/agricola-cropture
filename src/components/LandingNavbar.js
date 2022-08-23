import React from "react";
import { Link } from "react-router-dom";

const LandingNavbar = () => {
  return (
    <>
      <nav className="landingNavbar navbar navbar-expand-md fixed-top bg-body bg-gradient">
        <div className="container my-2 px-0">
          <Link to="/" className="navbar-brand text-dark fw-bold">
            Agricola Cropture
          </Link>
          <Link to="/dashboard" className="ms-auto me-3">
            <button className="btn btn-outline-primary">Use App</button>
          </Link>

          <div
            className="collapse navbar-collapse flex-grow-0"
            id="collapseNav"
          >
            <div className="navbar-nav">
              <Link
                to="/"
                className="nav-item nav-link text-dark h6 mx-3 my-auto"
              >
                About
              </Link>
              <Link to="/" className="nav-item nav-link text-dark h6 my-auto">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LandingNavbar;
