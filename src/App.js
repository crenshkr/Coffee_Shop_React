import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./components/home/Home.js";
import About from "./components/about/About.js";
import Coffees from "./components/coffees/Coffees.js";
import "../src/components/global.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="./About.js" element={<About />} />
        <Route path="./Coffees.js" element={<Coffees />} />
      </Routes>
    </Router>
  );
}

export default App;
