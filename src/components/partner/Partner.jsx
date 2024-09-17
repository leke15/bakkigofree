import React from "react";
import "./partner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Drive = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_gknq4jm", "template_0x4gvcv", form.current, {
        publicKey: "Kl7uMUzO1pUjNJiX9",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="partner">
      <div className="partner_title">
        <h1>
           Become A Partner
        </h1>
      </div>

      <div className="partner_benefits">
        <div>
          <h4 className="partner_text">What’s in it for your Business: </h4>

          <div className="partner_perk">
            <p className="perk-desc">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="partner_checkmark"
              />
              Custom Made discounts
            </p>
          </div>

          <div className="partner_perk">
            <p className="perk-desc">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="partner_checkmark"
              />{" "}
              24/7 Customer Support
            </p>
          </div>

          <div className="partner_perk">
            <p className="perk-desc">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="partner_checkmark"
              />
              Prioritized with top-rated drivers
            </p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="partner-mobile-form">
          <input
            type="text"
            name="name"
            placeholder="Your FullName..."
            required
            className="info-field"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email..."
            required
            className="info-field"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Partner up?..."
            required
            className="info-field"
          ></textarea>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Drive;
