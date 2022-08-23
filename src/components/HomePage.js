import React from "react";
import CheckTheModel from "./CheckTheModel";
import DemoContent from "./DemoContent";
import LandingNavbar from "./LandingNavbar";
import OurWork from "./OurWork";
import Title from "./Title";

const HomePage = () => {
  return (
    <>
      <LandingNavbar />
      <div className="pageContainer">
        <Title />
        <OurWork />
        <DemoContent />
        <CheckTheModel />
      </div>
    </>
  );
};

export default HomePage;
