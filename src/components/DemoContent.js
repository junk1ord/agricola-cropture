import React from "react";

const DemoContent = () => {
  return (
    <>
      <div className="section d-flex justify-content-start align-items-center">
        <div className="content">
          <div className="container-fluid">
            <div className="row" style={{ margin: "auto" }}>
              <div className="col-md-6">
                <div className="d-flex justify-content-center align-items-center">
                  <iframe
                    width="533.34"
                    height="300"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="bg-light px-3 jumbotron"
                  style={{ width: "fit-content" }}
                >
                  <h1>Still skeptical?</h1>
                </div>
                <div className="bg-light px-3 jumbotron-lead">
                  Here's a demo of how our application works. See for yourself
                  and then think twice.
                </div>
                <div className="mt-3">
                  <button type="button" className="btn btn-lg btn-light me-2">
                    Random Link 1
                  </button>
                  <button type="button" className="btn btn-lg btn-light">
                    Random Link 2
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoContent;
