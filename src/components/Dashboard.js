import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import Navbar from "./Navbar";
import { ProgressBar } from "react-bootstrap";
import { BiDownArrowCircle, BiUpArrowCircle } from "react-icons/bi";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  Legend,
} from "recharts";

const data1 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data2 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <DashboardSidebar active="dashboard" />

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
              <h2>Dashboard</h2>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
              </div>
            </div>

            <div className="container-fluid my-5">
              <div className="row">
                <div className="col-lg-3 bg-light p-2">
                  <div className="shadow p-2">
                    <div className="py-2">Stock in the Market</div>
                    <div className="fs-2 py-2">19.39K</div>
                    <div className="py-2">Overview of Last Month</div>
                    <ProgressBar now={23} />
                    <div className="text-muted py-2">Monthly: 23%</div>
                  </div>
                </div>
                <div className="col-lg-3 bg-light p-2">
                  <div className="shadow p-2">
                    <div className="py-2">Stock in the Market</div>
                    <div className="fs-2 py-2">19.39K</div>
                    <div className="py-2">Overview of Last Month</div>
                    <ProgressBar now={60} />
                    <div className="text-muted py-2">Monthly: 60%</div>
                  </div>
                </div>
                <div className="col-lg-3 bg-light p-2">
                  <div className="shadow p-2">
                    <div className="py-2">Stock in the Market</div>
                    <div className="fs-2 py-2">19.39K</div>
                    <div className="py-2">Overview of Last Month</div>
                    <ProgressBar now={70} />
                    <div className="text-muted py-2">Monthly: 70%</div>
                  </div>
                </div>
                <div className="col-lg-3 bg-light p-2">
                  <div className="shadow p-2">
                    <div className="py-2">Stock in the Market</div>
                    <div className="fs-2 py-2">19.39K</div>
                    <div className="py-2">Overview of Last Month</div>
                    <ProgressBar now={30} />
                    <div className="text-muted py-2">Monthly: 30%</div>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="bg-light shadow p-2">
                        <div>Recurring Revenue</div>
                        <div className="fs-2">INR 354.8K</div>
                        <BiDownArrowCircle className="text-danger fs-2" />
                        <span>27% Last Month</span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="bg-light shadow p-2">
                        <div>Recurring Revenue</div>
                        <div className="fs-2">INR 196.8K</div>
                        <BiUpArrowCircle className="text-success fs-2" />
                        <span>10% Last Month</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <LineChart
                      width={500}
                      height={300}
                      data={data2}
                      className="pt-5"
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                    <div className="mt-5">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Reprehenderit inventore quo ad doloribus! Molestias error
                      laboriosam suscipit atque quam voluptatem esse, eum, harum
                      velit fugiat, facilis est repellendus! Placeat, itaque.
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="bg-light shadow p-3">
                    <div>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Temporibus aliquam nulla molestiae ea accusamus
                      consequuntur enim, eveniet pariatur rerum quisquam
                      repellat aspernatur et tempora, culpa veritatis dolorem
                      labore ipsum? Vero.
                    </div>

                    <AreaChart
                      width={525}
                      height={400}
                      data={data1}
                      className="mt-3"
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="uv"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                      <Area
                        type="monotone"
                        dataKey="pv"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                      />
                      <Area
                        type="monotone"
                        dataKey="amt"
                        stackId="1"
                        stroke="#ffc658"
                        fill="#ffc658"
                      />
                    </AreaChart>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
