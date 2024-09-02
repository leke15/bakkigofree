import React from "react";
import logo from "../../assets/logo.jpg"
import Smart1 from "../../assets/five-hunnid.jpeg";
import Smart2 from "../../assets/one-ton.jpg";
import Leggo from "../../assets/four-ton.jpeg";
import Combo from "../../assets/eight-ton.jpg";
import Navbar from "../home/Navbar";
import Guide from "./Guide";
import Footer from "../footer/Footer"
import "./service.css";
const Service = () => {
  return (
    <section>
    <Navbar />
    <div className="service-body">
    <div className="service-banner">
      <div className="service-banner-text">You're one click away from effortless moving solution</div>
      <div className="service-graphic">
        <img src={logo} alt="Bakkiego"/>
        </div>
        
    </div>

      <h2 className="page-topic">Services</h2>
      {/* Services container */}

      <div className="services-container">
        {/* Service 1 */}
        <article className="service-item">
          <div className="item-image">
            <img src={Smart1} alt="" />
          </div>
          <h3 className="item-name">Smart 1</h3>
          <p className="item-desc">Trucks weighing from 500kg to 1 tons. Best for household goods and deliveries</p>
          <div className="item-cta">
            <a href="https://play.google.com/store/apps/details?id=com.bakkiego.customer&pcampaignid=web_share">Order Now</a>
          </div>
        </article>
        {/* Service 2  */}
        <article className="service-item">
          <div className="item-image">
            <img src={Smart2} alt="" />
          </div>
          <h3 className="item-name">Smart 2</h3>
          <h4 className="item-desc">Trucks weighing from 1tons to 2 tons. Best for furnitures, and other Meduim weighted items</h4>
          <div className="item-cta">
            <a href="https://play.google.com/store/apps/details?id=com.bakkiego.customer&pcampaignid=web_share">Order Now</a>
          </div>
        </article>
        {/*  service 3 */}
        <article className="service-item">
          <div className="item-image">
            <img src={Leggo} alt="" />
          </div>
          <h3 className="item-name">Leggo</h3>
          <h4 className="item-desc">Trucks weighing from 2tons to 4tons. Can carry industrial tools and heavy weighted goods </h4>
          <div className="item-cta">
            <a href="https://play.google.com/store/apps/details?id=com.bakkiego.customer&pcampaignid=web_share">Order Now</a>
          </div>
        </article>
        {/* service 4 */}
        <article className="service-item">
          <div className="item-image">
            <img src={Combo} alt="" />
          </div>
          <h3 className="item-name">Combo</h3>
          <h4 className="item-desc">Trucks weighing from 4tons to 8tons.</h4>
          <div className="item-cta">
            <a href="https://play.google.com/store/apps/details?id=com.bakkiego.customer&pcampaignid=web_share">Order Now</a>
          </div>
        </article>
      </div>
      </div>
      <Guide />
      <Footer />
    </section>
  );
};

export default Service;
