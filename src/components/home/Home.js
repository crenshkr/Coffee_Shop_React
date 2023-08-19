import React from "react";
import Footer from "../footer/Footer.js";
import "../home/home.css";
import seperator from "../../images/title-separator.png";
import icon1 from "../../images/h2-custom-icon-5.png";
import icon2 from "../../images/h2-custom-icon-6.png";
import icon3 from "../../images/h2-custom-icon-7.png";
import icon4 from "../../images/h2-custom-icon-8.png";
import item1 from "../../images/blog-1-img-1.jpg";
import item2 from "../../images/blog-1-img-2.jpg";
import item3 from "../../images/blog-1-img-3.jpg";
import shop1 from "../../images/product-img-3.png";
import shop2 from "../../images/product-img-1.png";
import shop3 from "../../images/product-img-11.png";
import shop4 from "../../images/product-img-8.png";
import grid1 from "../../images/port-1-gallery-1.jpg";
import grid2 from "../../images/port-1-gallery-10.jpg";
import grid3 from "../../images/port-1-gallery-11.jpg";
import grid4 from "../../images/port-1-gallery-12.jpg";
import grid5 from "../../images/port-1-gallery-3.jpg";
import grid6 from "../../images/port-1-gallery-5.jpg";
import grid7 from "../../images/port-1-gallery-6.jpg";
import grid8 from "../../images/port-1-gallery-7.jpg";

const Home = () => (
  <div className="home-container">
    <section className="home-section">
      <h1>Welcome to My Coffee Shop</h1>
      <p>Enjoy the best coffee in town.</p>
    </section>
    <section className="home-section-2">
      <h2>OUR DELICIOUS OFFER</h2>
      <img src={seperator} className="home-seperator" alt="seperator" />
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </h3>
      {/* Add menu details */}
    </section>

    <section className="home-section-3">
      <div className="offers-container">
        <div className="offers">
          <img src={icon1} alt="icon-1" />
          <h4>TYPES OF COFFEE</h4>
          <h5>
            Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
            Aeneantos commodo
          </h5>
        </div>
        <div className="offers">
          <img src={icon2} alt="icon-2" />
          <h4>BEAN VARIETIES</h4>
          <h5>
            Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
            Aeneantos commodo
          </h5>
        </div>
        <div className="offers">
          <img src={icon3} alt="icon-3" />
          <h4>COFFEE & PASTRY</h4>
          <h5>
            Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
            Aeneantos commodo
          </h5>
        </div>
        <div className="offers">
          <img src={icon4} alt="icon-4" />
          <h4>COFFEE TO GO</h4>
          <h5>
            Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
            Aeneantos commodo
          </h5>
        </div>
      </div>

      {/* Add contact details */}
    </section>

    <section className="home-section-4">
      <h2>THE COFFEE HERALD</h2>
      <img src={seperator} className="home-seperator" alt="seperator" />
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </h3>
      <div className="items-4">
        <div className="item-4">
          <img src={item1} alt="icon-2" className="img-4" />

          <h3>THE COFFEE HERALD</h3>

          <h4 className="text-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </h4>
          {/* Add menu details */}
        </div>
        <div className="item-4">
          <img src={item2} alt="icon-2" className="img-4" />

          <h3>THE COFFEE HERALD</h3>
          <h4 className="text-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </h4>
          {/* Add menu details */}
        </div>
        <div className="item-4">
          <img src={item3} alt="icon-2" className="img-4" />

          <h3>THE COFFEE HERALD</h3>
          <h4 className="text-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </h4>
          {/* Add menu details */}
        </div>
      </div>
    </section>

    <section className="home-section-5"></section>

    <section className="home-section-6">
      <div className="metrics-container">
        <div className="metrics">
          <p>250</p>
          <h4>TYPES OF COFFEE</h4>
          <h5>
            Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
            Aeneantos commodo
          </h5>
        </div>
        <div className="metrics">
          <p>250</p>
          <h4>BEAN VARIETIES</h4>
          <h5>
            Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
            Aeneantos commodo
          </h5>
        </div>
        <div className="metrics">
          <p>250</p>
          <h4>COFFEE & PASTRY</h4>
          <h5>
            Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
            Aeneantos commodo
          </h5>
        </div>
        <div className="metrics">
          <p>250</p>
          <h4>COFFEE TO GO</h4>
          <h5>
            Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
            Aeneantos commodo
          </h5>
        </div>
      </div>
    </section>

    <section className="home-section-7">
      <h2>ONLINE COFFEE SHOP</h2>
      <img src={seperator} className="home-seperator" alt="seperator" />
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </h3>
      <div className="shop-items">
        <div className="shop-item">
          <img src={shop1} alt="shop1" />
          <h4>Guatemalan</h4>
          <h5>
            Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
            Aeneantos commodo
          </h5>
        </div>
        <div className="shop-item">
          <img src={shop2} alt="shop2" />
          <h4>Guatemalan</h4>
          <h5>
            Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
            Aeneantos commodo
          </h5>
        </div>
        <div className="shop-item">
          <img src={shop3} alt="shop3" />
          <h4>Guatemalan</h4>
          <h5>
            Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
            Aeneantos commodo
          </h5>
        </div>
        <div className="shop-item">
          <img src={shop4} alt="shop3" />
          <h4>Guatemalan</h4>
          <h5>
            Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
            Aeneantos commodo
          </h5>
        </div>
      </div>
      {/* Add menu details */}
    </section>

    <section className="home-section-8">
      <h2>OUR SWEET GALLERY</h2>
      <img src={seperator} className="home-seperator" alt="seperator" />
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </h3>
      {/* Add menu details */}
    </section>

    <section className="home-section-9">
      <div className="top-row">
        <div className="gallery-grid">
          <div className="grid-item">
            <img className="grid-img" src={grid1} alt="shop3" />
          </div>
          <div className="grid-item">
            <img src={grid2} alt="shop3" />
          </div>
          <div className="grid-item">
            <img src={grid3} alt="shop3" />
          </div>
          <div className="grid-item">
            <img src={grid4} alt="shop3" />
          </div>
        </div>
        <div className="bottom-row">
          <div className="grid-item">
            <img src={grid5} alt="shop3" />
          </div>
          <div className="grid-item">
            <img src={grid6} alt="shop3" />
          </div>
          <div className="grid-item">
            <img src={grid7} alt="shop3" />
          </div>
          <div className="grid-item">
            <img src={grid8} alt="shop3" />
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Home;
