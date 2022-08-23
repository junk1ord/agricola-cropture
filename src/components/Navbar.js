import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <header className="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 shadow">
        <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/">
          Agricola Cropture
        </Link>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <GiHamburgerMenu />
        </button>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <Link className="nav-link px-3" to="/">
              Home
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
