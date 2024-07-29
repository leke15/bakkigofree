import React from 'react'
import handshake from "../../assets/handshake.jpg"
import "./partner.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
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
    <section id='partner'>
      <div id="partner_backdrop">
        <img src={handshake} alt="handshaking" id='partner_img'/>

        <div id='partner_title'>
          <h3 id='partner_text'> <b> Become A Partner</b></h3>
        </div>
      </div>

      <div id="partner_benefits">
        <div><h4 id='partner_text'>What’s in it for your Business: </h4>
        
        <div id="partner_perk">
        <FontAwesomeIcon icon={faCircleCheck} id='partner_checkmark'/> Custom Made discounts 
        </div>

        <div id="partner_perk">
        <FontAwesomeIcon icon={faCircleCheck} id='partner_checkmark'/> 24/7 Customer Support 
        </div>

        <div id="partner_perk">
        <FontAwesomeIcon icon={faCircleCheck} id='partner_checkmark'/> Prioritized with top-rated drivers 
        </div></div>

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
            placeholder="Partner up?..."
            required
          ></textarea>
          <button type="submit" className="contact-btn" >
            Send Message
          </button>
        </form>
      </div>
    </section >
  )
}

export default Drive