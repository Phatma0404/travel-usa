import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Search from "./components/Search";
import Selects from "./components/Selects";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import CityDetails from "./components/CityDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Destinations />
        <Search />
        <Selects />
        <Carousel />
        <Routes>
          <Route path="/:cityName" element={<CityDetails />} />{" "}
          {/* Dynamic route */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
