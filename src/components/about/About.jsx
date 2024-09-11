import React from "react";
import Navbar from "../home/Navbar";
import Footer from "../footer/Footer";
import ceo from "../../assets/ceo.jpg";
import ctm from "../../assets/ctm.jpg";
import "./about.css";
const About = () => {
  return (
    <section id="about">
      <Navbar />
      <h1 className="about-heading"> Let me introduce you to an <b>IDEA...</b></h1>
      <div className="about-container">
        <div className="about-desc">
          <p>
            Moving goods, personal items, or merchandise is always a hassle and
            the current solutions provided are not helping but are becoming a
            problem as well. Bakkiego comes in between bridging the current
            inefficient solutions and the problem of hassle movement with the
            number one solution South Africa acknowledges as the "informal
            alternative",<b>BAKKIES</b>, we all know they are flexible,
            tenacious, and always ready to help. Not only are we involving the
            local working community of these amazing movers but we are giving
            them a platform to extend their services by using their trucks which
            we all know and trust connecting formal or informal uses for a price
            both parties can agree on by themselves.
          </p>
        </div>
      </div>
      <h3 className="team-heading">Our Team</h3>
      <div className="team-container">
        <div className="team-member">
          <img src={ceo} alt="David Ayomidotun" className="team-img" />
          <div className="team-info">
            <p>
              David Ayomidotun <br /> C.E.O
            </p>
          </div>

          <img src={ctm} alt="Nolo Letlaka" className="team-img2" />
          <div className="team-info">
            <p>
              Nolo Letlaka <br /> C.M.O
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
