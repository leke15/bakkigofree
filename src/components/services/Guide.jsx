import React from "react";
import "./guide.css";
import Partner from "../partner/Partner"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChampagneGlasses, faDownload, faImage } from "@fortawesome/free-solid-svg-icons";

function Guide() {
  return (
    <div>
      <div className="guide-header">
        <h3>How it Works</h3>
      </div>

      <div className="steps-container">
        {/* step 1 */}
        <div className="step">
          <FontAwesomeIcon icon={faDownload} className="step-icon" />
          <p className="step-desc">
            Download the app from your google play store or the app store and
            then Register
          </p>
        </div>
        {/* step 2 */}
        <div className="step">
        <FontAwesomeIcon icon={faImage} className="step-icon" />
          <p className="step-desc">
          Take a picture of what you want to move, then put an offer to place your request.
          </p>
        </div>
        {/* step 3 */}
        <div className="step">
        <FontAwesomeIcon icon={faChampagneGlasses} className="step-icon" />
          <p className="step-desc">
          Accept the driver of your choice and validate with your order OTP. Have a good trip!
          </p>
        </div>
      </div>
      <Partner />
    </div>
  );
}

export default Guide;
