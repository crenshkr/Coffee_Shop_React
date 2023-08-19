import React from "react";
import Footer from "../footer/Footer.js";
import aboutImage from "../../images/coffee-beans.jpg"; // Your image
import "../about/about.css";

const About = () => (
  <div className="container">
    <img src={aboutImage} alt="About us" className="about-image" />
    <div className="about-text">
      <p>Our journey began in 2010...</p>
      <p>We pride ourselves in sourcing the finest beans...</p>
    </div>
    <Footer />
  </div>
);

export default About;
