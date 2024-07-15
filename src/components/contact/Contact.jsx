import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
    <section id="contact">
      <h5 className="page-name">Contact</h5>
      <div className="contact-container">
        <div className="contact__options">
          {/* Email */}
          <article className="contact__option">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="contact__option-icon"
            />
            <h4>Email</h4>
            <h5>info@bakkiego.com</h5>
            <a href="mailto:lekeayomidotun" target="_blank">
              Send a Message
            </a>
          </article>

          {/* Facebook */}
          <article className="contact__option">
            <FontAwesomeIcon
              icon={faFacebook}
              className="contact__option-icon"
            />
            <h4>Facebook</h4>
            <h5>Bakkiego</h5>
            <a href="https://www.facebook.com/Bakkiegoapp" target="_blank">
              View our Profile
            </a>
          </article>

          {/* Whatsapp */}
          <article className="contact__option">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="contact__option-icon"
            />
            <h4>Whatsapp</h4>
            <h5>+27621685478</h5>
            <a
              href="https://api.whatsapp.com/send?phone=27621685478"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your FullName..."
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email..."
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="What do you wanna say to me?..."
            required
          ></textarea>
          <button type="submit" className="contact-btn" >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
