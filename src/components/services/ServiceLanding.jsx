import React from 'react'
import "./servland.css"
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup, faTruckFast } from '@fortawesome/free-solid-svg-icons'

function ServiceLanding() {
  return (
    <section className='service-landing-mobile'>
        <div className='service-landing-container'>
            <h1 className="service-landing-title">Our Services</h1>
            <div className='service-container service1'>
            <FontAwesomeIcon icon={faTruckFast} className='service-icon'/> <br/>
            <button className='btn service-btn' > <Link smooth to="/Service"> Request a bakkie</Link></button>
            </div>
            <div className='service-container service2'>
            <FontAwesomeIcon icon={faPeopleGroup} className='service-icon'/> <br/>
            <button className='btn service-btn'> <Link smooth to ="/Business">Join our Team</Link></button>
            </div>
        </div>
    </section>
  )
}

export default ServiceLanding