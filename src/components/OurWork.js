import React from "react";

const OurWork = () => {
  return (
    <>
      <div className="section d-flex justify-content-start align-items-center">
        <div className="content">
          <div className="row">
            <div className="col-md-6">
              <div className="ms-5 ps-5">
                <div
                  className="bg-light px-3 jumbotron"
                  style={{ width: "fit-content" }}
                >
                  <h1>Who are we?</h1>
                </div>
                <div
                  style={{ textAlign: "justify" }}
                  className="bg-light px-3 jumbotron-lead"
                >
                  Dramatically incubate synergistic "outside the box" thinking
                  vis-a-vis synergistic e-markets. Efficiently foster
                  cross-media processes vis-a-vis low-risk high-yield results.
                  Energistically incentivize equity invested results whereas
                  cost effective experiences.
                </div>
                <div className="mt-3">
                  <button
                    type="button"
                    className="btn btn-lg btn-outline-light me-2"
                  >
                    Random Link 1
                  </button>
                  <button
                    type="button"
                    className="btn btn-lg btn-outline-light"
                  >
                    Random Link 2
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://image.freepik.com/free-vector/man-with-laptop-analyzing-infographics-diagram-bar-chart-report-flat-vector-illustration-analysis-marketing-project-manager_74855-8454.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWork;
