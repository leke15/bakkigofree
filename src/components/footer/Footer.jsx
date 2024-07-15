import React from "react";
import Logo from "../../assets/logo.jpg";
import {
  faFacebook,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div id="footer-logo">
        <img src={Logo} alt="Bakkiego" className="logo-img" />
      </div>

      <div className="achor-links">
        <ul>
          <div className="links">
            <li>
              <a href="#home">Bakkiego</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#business">Business</a>
            </li>
            <li>
              <a href="#cta">Download the app</a>
            </li>
          </div>
        </ul>
      </div>

      <div className="social-media">
        <a href="https://www.facebook.com/Bakkiegoapp">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=27621685478">
          <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
        </a>
        <a href="https://www.youtube.com/@BakkieGo">
          <FontAwesomeIcon icon={faYoutube} className="social-icon" />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; 2024 Bakkiego Technologies. All rights reserved.</small>
      </div>
    </section>
  );
};

export default Footer;
