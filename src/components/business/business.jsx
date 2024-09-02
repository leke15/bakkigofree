import React from "react";
import Navbar from "../home/Navbar";
import BakkiegoPlus from "../bakkie+/BakkiegoPlus"
import Earnings from "../earnings/Earnings"
import Partner from "../partner/Partner"
import Footer from "../footer/Footer";
import aiImage from "../../assets/AiImage.jpg";
import "./business.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons/faMapPin";
import { faRoute } from "@fortawesome/free-solid-svg-icons";

const business = () => {
  return (
    <section id="business-container">
      <Navbar /> 
      <div className="pagebanner">
        <div className="imgbanner">
          <img src={aiImage} alt="join bakkiego" id="driver_img" />
        </div>

        <div className="textbanner">
          <FontAwesomeIcon icon={faMapPin} id="location_pin" />
          <h3 className="home_text">Opportunities Everywhere</h3>
          <p className="desc_text">
            Make the most of your time on the road with a platform of customers
            looking for your services.
          </p>
          <div className="cta-01">
            <a href="#verification" className="cta_01_btn">
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
