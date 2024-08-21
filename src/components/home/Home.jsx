import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import About from "../../components/about/About";
import Features from "../services/Features";
import DownloadApp from "../../components/downloadApp/DownloadApp";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import ServiceLanding from "../services/ServiceLanding";
import Logo from "../../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./home.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="container">
      <div className="header">
        <img src={Logo} alt="Bakkiego" className="logo_img" />

        <nav className="navbar">
          {/*navigation links */}
          <div className="navbar-links navbar-links2">
            {/* Use HashLink for smooth scroll */}
            <Link smooth to="/#home">
              Home
            </Link>
            <Link smooth to="/#about">
              About
            </Link>
            <Link smooth to="/Service">
              Services
            </Link>
            <Link smooth to="/#contact">
              Contact
            </Link>
            <Link id="whatsapp-cta" smooth to="https://wa.me/27696680474">
              <FontAwesomeIcon icon={faWhatsapp} id="whatsapp-icon" />
              +27 696680474
            </Link>
            <Link
              id="download-cta"
              smooth to="https://play.google.com/store/apps/details?id=com.bakkiego.customer&pcampaignid=web_share"
            >
              Download the app
            </Link>
          </div>
        </nav>
      </div>
      {/* mobile nav-bar */}
      <div className="mobile-nav-container">
        <div className="mobile-nav-buttons" onClick={toggleNav}>
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </div>
        {isOpen && (
          <nav className="mobile-navbar">
            <div className="mobile-navbar-links">
              <Link smooth to="/#services">
                Services
              </Link>
              <Link to="/business">Business</Link>
              <Link smooth to="/#about">
                About
              </Link>
              <Link smooth to="/#home">
                Home
              </Link>
              <Link smooth to="/#contact">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
      {/*End*/}
      <div className="landing-container">
        <div>
          <h2 className="motto">
            Move Your  <br />Goods <br /> Anywhere  <br />
            AnyTime
          </h2>
          <FontAwesomeIcon icon={faAnglesDown} id="scroll-down" />
        </div>
      </div>
      <ServiceLanding />
      <Features />
      <DownloadApp />
      <Contact />
      <Footer />
    </section>
  );
};

export default Home;
