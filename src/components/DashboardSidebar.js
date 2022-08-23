import React from "react";
import { Link } from "react-router-dom";

const DashboardSidebar = ({ active }) => {
  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        style={{ position: "fixed", height: "100vw" }}
      >
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
          <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <img src="brandLogo.svg" alt="" />
            <span className="fs-4">Sidebar</span>
          </div>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li>
              {/* <div className={"myClass " + (position === index ? 'active' : '')}> */}
              <Link
                to="/dashboard"
                className={
                  "nav-link " +
                  (active === "dashboard" ? "active" : "link-dark")
                }
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/commodities"
                className={
                  "nav-link " +
                  (active === "commodities" ? "active" : "link-dark")
                }
              >
                Commodities
              </Link>
            </li>
            <li>
              <Link
                to="/reports"
                className={
                  "nav-link " + (active === "reports" ? "active" : "link-dark")
                }
              >
                Reports
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className={
                  "nav-link " + (active === "aboutus" ? "active" : "link-dark")
                }
              >
                About Us
              </Link>
            </li>
          </ul>
          <div className="d-flex flex-column" style={{ width: "100%" }}>
            <hr />
            <div className="dropdown">
              <Link
                to="/dashboard"
                className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt=""
                  width="32"
                  height="32"
                  className="rounded-circle me-2"
                />
                <strong>Your name</strong>
              </Link>
              <ul
                className="dropdown-menu text-small shadow"
                aria-labelledby="dropdownUser2"
              >
                <li>
                  <Link className="dropdown-item" to="/dashboard">
                    New project...
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/dashboard">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/dashboard">
                    Profile
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/dashboard">
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashboardSidebar;
