import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Drive from "../drive/Drive"
import Earnings from "../earnings/Earnings"
import Verification from "../verification/Verification"
import Logo from "../../assets/logo.jpg";
import aiImage from "../../assets/AiImage.jpg"
import './business.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons/faMapPin'
import { faRoute } from '@fortawesome/free-solid-svg-icons'


const business = () => {
  return (
    <section>
      <div className='header'>
      <img src={Logo} alt="Bakkiego" className="logo_img" />
      </div>

      <nav className='navbar'>
      <div className="navbar-links-01">
        <Link smooth to="#/verification" >Requirements</Link>
        <Link smooth to="#earn" >Earning</Link>
        <Link smooth to="/#drive" >Partner</Link>
        <Link smooth to="/#about" >about</Link>
      </div>
      </nav>
    <div id="pagebanner">
      <div id='imgbanner'>
        <img src={aiImage} alt="join bakkiego" id='driver_img'  />
      </div>
       
      <div id="textbanner"> 
        <FontAwesomeIcon icon={faMapPin} id='location_pin'/>
        <h3 id='home_text'>Opportunities Everywhere</h3>
        <h5 id='desc_text'>Make the most of your time on the road with a platform of customers looking for your services.</h5>
      <div id="cta-01">
            <a href="#verification" download className="cta_01_btn">
              Drive
            </a> 
      </div>
      <FontAwesomeIcon icon={faRoute} id='route_icon'/>
      </div>
       
      </div>
    </section>
  )
}

export default business