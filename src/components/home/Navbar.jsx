import React, { useState } from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../assets/logo.jpg";
import "./navbar.css";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header">
      <img src={Logo} alt="Bakkiego" className="logo_img" />

      <nav className="navbar">
        {/*navigation links */}
        <div className="navbar-links navbar-links2">
          {/* Use HashLink for smooth scroll */}
          <Link smooth to="/#home">
            Home
          </Link>
          <a href="#about">
            About
          </a>
          <Link smooth to="/Service">
            Services
          </Link>
          <a href="#contact">
            Contact
          </a>
          <Link id="whatsapp-cta" smooth to="https://wa.me/27696680474">
            <FontAwesomeIcon icon={faWhatsapp} id="whatsapp-icon" />
            +27 696680474
          </Link>
          <Link
            id="download-cta"
            smooth
            to="https://play.google.com/store/apps/details?id=com.bakkiego.customer&pcampaignid=web_share"
          >
            Download the app
          </Link>
        </div>
      </nav>
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
    </div>
  );
}

export default Navbar;
