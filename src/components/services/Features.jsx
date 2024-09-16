import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./features.css"
import {
    faShieldHalved,
    faStopwatch20,
    faGaugeHigh,
  } from "@fortawesome/free-solid-svg-icons";

function Features() {
  return (
    <div className='mobile-section-container'>
    <div className='section-topic'><h3 >Why Bakkiego?</h3></div>
    <div className="features-container">
        {/* App feature 1 */}
        <article className="feature-item">
          <div className="feat-icon">
            <FontAwesomeIcon icon={faShieldHalved} />
            <h3 className="feat-topic">Safe & Efffective</h3>
          </div>

          <p className="feat-desc">
            
             We ensure all Bakkies vehicles and Drivers are vetted and compliant
            with safety rules. Our Solution guarantees delivery for every trip
            with our delivery confirmation code before any driver completes his
            trip
          </p>
        </article>
        {/* App feature 1 */}
        <article className="feature-item">
          <div className="feat-icon">
            <FontAwesomeIcon icon={faStopwatch20} />
            <h3 className="feat-topic">Fast Pickups</h3>
          </div>

          <p className="feat-desc">
            Easy and quick booking in just 2 tabs just add both location details
             and in the next tab just acceptance from the driver for the ride.
            Here we goo! 
          </p>
        </article>
        {/* App feature 1 */}
        <article className="feature-item">
          <div className="feat-icon">
            <FontAwesomeIcon icon={faGaugeHigh} />
            <h3 className="feat-topic">Safe & Efffective</h3>
          </div>

          <p className="feat-desc">
            Bakkiego aims to offer quick and efficiant delivery services to its
             customer.The app promises to deliver within the shortest possible
            time to meet the needs of its users 
          </p>
          </article>
          </div>
          </div>
  )
}

export default Features