import React from "react";
import { Link } from "react-router-dom";
import "../navbar/navbar.css";

const Navbar = () => (
  <nav>
    <div className="nav-align">
      <div className="nav-left">HEY</div>
      <div className="nav-right">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/About.js" className="nav-link">
          About
        </Link>
        <Link to="/Coffees.js" className="nav-link">
          Coffees
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
