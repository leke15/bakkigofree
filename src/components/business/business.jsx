import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Partner from "../partner/Partner";
import Earnings from "../earnings/Earnings";
import BakkiegoPlus from "../bakkie+/BakkiegoPlus";
import Footer from "../footer/Footer";
import Logo from "../../assets/logo.jpg";
import aiImage from "../../assets/AiImage.jpg";
import "./business.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons/faMapPin";
import { faRoute } from "@fortawesome/free-solid-svg-icons";

const business = () => {
  return (
    <section id="business-container">
      <div className="header">
        <img src={Logo} alt="Bakkiego" className="logo_img" />
      </div>

      <nav className="navbar">
        <div className="navbar-links-01">
          <a href="#earn">
            Requirements
          </a>
          <a href="#earn">
            Earning
          </a>
          <a href="#partner">
            Partner
          </a>
          <Link smooth to="/#about">
            About
          </Link>
        </div>
      </nav>
      <div id="pagebanner">
        <div id="imgbanner">
          <img src={aiImage} alt="join bakkiego" id="driver_img" />
        </div>

        <div id="textbanner">
          <FontAwesomeIcon icon={faMapPin} id="location_pin" />
          <h3 id="home_text">Opportunities Everywhere</h3>
          <h5 id="desc_text">
            Make the most of your time on the road with a platform of customers
            looking for your services.
          </h5>
          <div id="cta-01">
            <a href="#verification" download id="cta_01_btn">
              Drive
            </a>
          </div>
          <FontAwesomeIcon icon={faRoute} id="route_icon" />
        </div>
      </div>
      <BakkiegoPlus />
      <Earnings />
      <Partner />
      <Footer />
    </section>
  );
};

export default business;
