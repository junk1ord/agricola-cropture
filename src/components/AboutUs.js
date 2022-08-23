import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <DashboardSidebar active="aboutus" />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div
              className="
              d-flex
              justify-content-between
              flex-wrap flex-md-nowrap
              align-items-center
              pt-3
              pb-2
              mb-3
              border-bottom
            "
            >
              <h2>About Us</h2>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
