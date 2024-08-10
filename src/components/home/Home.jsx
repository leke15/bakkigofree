import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import About from "../../components/about/About";
import Service from "../../components/services/Service";
import DownloadApp from "../../components/downloadApp/DownloadApp";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Logo from "../../assets/logo.jpg";
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
            <Link id="download-cta" href="https://play.google.com/store/apps/details?id=com.bakkiego.customer&pcampaignid=web_share">
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
            Innovative <br/> Technologies <br/> Involving the <br/>Community
          </h2>
        </div>
      </div>
      <About />
      <Service />
      <DownloadApp />
      <Contact />
      <Footer />
    </section>
  );
};

export default Home;
