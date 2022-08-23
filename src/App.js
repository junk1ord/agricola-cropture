// roopkunwari

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import Dashboard from "./components/Dashboard";
import Commodities from "./components/Commodities";
import Reports from "./components/Reports";
import AboutUs from "./components/AboutUs";
import "./components/loaderJQ";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={[<HomePage />]} />
          <Route path="/dashboard" element={[<Dashboard />]} />
          <Route path="/commodities" element={[<Commodities />]} />
          <Route path="/reports" element={[<Reports />]} />
          <Route path="/aboutus" element={[<AboutUs />]} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
