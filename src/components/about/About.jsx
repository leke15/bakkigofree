import React from "react";
import bakkiedash from "../../assets/bakkiedash.jpeg";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./about.css";
const About = () => {
  return (
    <section id="about">
      {/* Right side of the about page: Image and a cta button */}
      <div className="right-panel">
        <img src={bakkiedash} alt="Bakkie Dashboard" className="car-img" />
        <div id="earn">
          <a href="">Earn Money</a>
        </div>
      </div>

      {/* Left side of the about page: Introduction to bakkiego and our services */}
      <div className="left-panel">
        <h2 className="about-header">
          The Best On-demand Booking Platform to Move your Goods anywhere at
          Anytime
        </h2>

        <h4 className="about-text">
          Online freight booking systems in South Africa often struggle with
          high fixed prices, making them unaffordable for customers. Our mission
          is to provide reliable and comfortable services to all movers of
          goods, allowing them to name their own price.
        </h4>

        {/* Outline Section 1 */}
        <div className="outline">
          <div className="outline-item">
            <div className="tick-icon">
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>
            <div className="outline-text">
              <h5>
                Lifters Option : We know that sometimes it requires more than
                yourself to lift the goods into your truck so we have the option
                of lifters included in our App.
              </h5>
            </div>
          </div>

          {/* Outline Section 2 */}
          <div className="outline-item">
            <div className="tick-icon">
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>
            <div className="outline-text">
              <h5>
                Picture Demand: Sometimes Distance and verbal conversations do
                not explain what you need to pick up, so we also have picture
                demand before you bargain
              </h5>
            </div>
          </div>
          {/* Outline Section 3 */}
          <div className="outline-item">
            <div className="tick-icon">
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>
            <div className="outline-text">
              <h5>
                Open bargain : Your price is determined by a fair bargaining
                system on our App, customer offers a price you either accept or
                make a counter offer
              </h5>
            </div>
          </div>
        </div>
        {/* End of section outline */}
      </div>
    </section>
  );
};

export default About;
