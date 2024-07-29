import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import About from "../../components/about/About";
import Service from "../../components/services/Service";
import DownloadApp from "../../components/downloadApp/DownloadApp";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Logo from "../../assets/logo.jpg";
import Movers from "../../assets/movers.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./home.css";

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
          <Link smooth to="/#services">Services</Link>
          <Link to="/business">Business</Link> 
          <Link smooth to="/#about">About</Link>
          <Link smooth to="/#home">Home</Link>
          <Link smooth to="/#contact">Contact</Link>
        </div>
      </nav>
      </div>
      {/* mobile nav-bar */}
      <div className="mobile-nav-container">
        <div className="mobile-nav-buttons" onClick={toggleNav}>
          <FontAwesomeIcon icon={isOpen ? faXmark: faBars} />
        </div>
        {isOpen && (
          <nav className="mobile-navbar">
            <div className="mobile-navbar-links">
            <Link smooth to="/#services">Services</Link>
          <Link to="/business">Business</Link> 
          <Link smooth to="/#about">About</Link>
          <Link smooth to="/#home">Home</Link>
          <Link smooth to="/#contact">Contact</Link>
            </div>
          </nav>
        )}
      </div>
      <div className="container intro__panel">
        <div className="right__panel">
          <h2 className="motto">
            Connecting you to your nearest delivery service
          </h2>
          <p className="motto_text">
            Bakkiego is a delivery and haulage app designed to provide
            individuals and businesses in South Africa with a flexible,
            convenient, and affordable means of transporting their goods.
          </p>

          <div className="cta">
            <a href="#download" download className="btn">
              Get Bakkie Now
            </a>
            <Link to="/business" className="btn btn-primary">
              Earn Money
            </Link>
          </div>
        </div>
        <img src={Movers} alt="Movers" className="panel__img" />
      </div>
      <About />
      <Service />
      <DownloadApp />
      <Contact />
      <Footer/>
    </section>
  );
};

export default Home;
