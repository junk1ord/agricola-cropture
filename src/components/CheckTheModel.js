import React from "react";
import { Link } from "react-router-dom";

const CheckTheModel = () => {
  return (
    <>
      <div className="section d-flex justify-content-center align-items-center">
        <div className="content text-center">
          <div
            className="bg-light px-1 mx-auto jumbotron "
            style={{ width: "fit-content" }}
          >
            <h1>AGRICOLA CROPTURE</h1>
          </div>
          <div className="bg-light px-3 mx-auto jumbotron-lead">
            Use our application, at your convinience, as your need.
          </div>
          <Link to="/dashboard">
            <button
              type="button"
              className="btn mt-2 fs-3 btn-lg btn-outline-light"
            >
              Test it out
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CheckTheModel;
