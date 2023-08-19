import React from "react";
import Slider from "react-slick";
import Footer from "../footer/Footer.js";
import "../coffees/coffees.css";

import coffee1 from "../../images/Arabica-Coffee-Beans.jpg";
import coffee2 from "../../images/close-up-of-roasted-liberica-coffee-beans_Katherine-Tan_Shutterstock.jpg";
import coffee3 from "../../images/brazil-santos.jpg";

const Coffees = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container coffee-section">
      <h2>Our Coffee Beans</h2>
      <Slider {...settings}>
        <div>
          <img src={coffee1} alt="Coffee 1" className="coffee-image" />
          <p className="coffee-description">
            Arabica Beans - A smooth and flavorful blend.
          </p>
        </div>
        <div>
          <img src={coffee2} alt="Coffee 2" className="coffee-image" />
          <p className="coffee-description">
            Robusta Beans - Strong and full-bodied taste.
          </p>
        </div>
        <div>
          <img src={coffee3} alt="Coffee 3" className="coffee-image" />
          <p className="coffee-description">
            Exotic Blend - A rare and unique flavor.
          </p>
        </div>
      </Slider>
      <Footer />
    </div>
  );
};

export default Coffees;
