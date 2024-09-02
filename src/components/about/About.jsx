import React from "react";
import Navbar from "../home/Navbar";
import Footer from "../footer/Footer";
import ceo from "../../assets/ceo.jpg";
import "./about.css";
const About = () => {
  return (
    <section id="about">
      <Navbar />
      <h1 className="about-heading"> About </h1>
      <div className="about-container">
        <h2 className="desc-heading">What We Do</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          quibusdam perspiciatis deleniti, id fuga impedit vero nulla excepturi
          enim a magnam nisi asperiores necessitatibus velit ab. Molestiae
          veritatis corrupti incidunt.
        </p>
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
          
          <img src={ceo} alt="David Ayomidotun" className="team-img" />
          <div className="team-info">
            <p>
              David Ayomidotun <br /> C.E.O
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
