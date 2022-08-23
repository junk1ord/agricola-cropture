import React from "react";
import Navbar from "./Navbar";
import DashboardSidebar from "./DashboardSidebar";

const Commodities = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <DashboardSidebar active="commodities" />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 ">
            <div
              className="
              d-flex
              justify-content-between
              flex-wrap flex-md-nowrap
              align-items-center
              pt-3
              pb-2
              mb-5
              border-bottom
            "
            >
              <h2>Commodities</h2>
            </div>
            <form action="/predict" method="POST" className="w-50 mx-auto">
              <div className="row mb-4">
                <div className="col-2 d-flex justify-content-center align-items-center">
                  District
                </div>
                <div className="col-10">
                  <div class="form-floating">
                    <select
                      class="form-select"
                      id="districtSelect"
                      name="district"
                      required
                    >
                      <option selected="true" disabled="disabled" value="">
                        Choose...
                      </option>
                      <option>Satara</option>
                      <option>Raigad</option>
                      <option>Mumbai</option>
                    </select>
                    <label for="cropSelect">Select District</label>
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-2 d-flex justify-content-center align-items-center">
                  Market
                </div>
                <div className="col-10">
                  <div class="form-floating">
                    <select
                      class="form-select"
                      id="marketSelect"
                      name="market"
                      required
                    >
                      <option selected="true" disabled="disabled" value="">
                        Choose...
                      </option>
                      <option>Koregaon</option>
                      <option>Lonand</option>
                      <option>Palthan</option>
                      <option>Vaduj</option>
                    </select>
                    <label for="cropSelect">Select Market</label>
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-2 d-flex justify-content-center align-items-center">
                  Crop
                </div>
                <div className="col-10">
                  <div class="form-floating ">
                    <select
                      class="form-select"
                      id="cropSelect"
                      name="crop"
                      required
                    >
                      <option selected="true" disabled="disabled" value="">
                        Choose...
                      </option>
                      <option>Wheat</option>
                      <option>Barley</option>
                      <option>Bajra</option>
                    </select>
                    <label for="cropSelect">Select Crop</label>
                  </div>
                </div>
              </div>

              {/* 
              <div className="row mb-4">
                <div className="col-2 d-flex justify-content-center align-items-center">
                  Variety
                </div>
                <div className="col-10">
                  <div class="form-floating">
                    <select
                      class="form-select"
                      id="marketSelect"
                      name="variety"
                      required
                    >
                      <option selected="true" disabled="disabled">
                        Choose...
                      </option>
                      <option value="1">Lauda</option>
                      <option value="2">Lasoon</option>
                      <option value="3">Bulla</option>
                    </select>
                    <label for="cropSelect">Select Variant</label>
                  </div>
                </div>
              </div> */}

              {/* <div className="row mb-4">
                <div className="col-2 d-flex justify-content-center align-items-center">
                  Date 
                </div>
                <div className="col-10">
                  <input className="px-3 py-2" type="date" id="birthday" />
                </div>
              </div> */}

              <div className="d-flex justify-content-center">
                <button type="reset" className="btn btn-outline-secondary me-3">
                  Reset
                </button>
                <button type="submit" class="btn btn-outline-success">
                  Forecast
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </>
  );
};

export default Commodities;
