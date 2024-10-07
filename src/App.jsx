import React from "react";

import "./App.css";
import Footer from "./components/common/Footer";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import CityDetails from "./components/CityDetails";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />{" "}
          <Route path="/city-details/:text" element={<CityDetails />} />{" "}
          {/* Dynamic route */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
