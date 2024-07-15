import React from "react";
import driver from "../../assets/driver.jpg";
import hand from "../../assets/get_app_img.png";
import "./download.css";
const DownloadApp = () => {
  return (
    <section id="cta">
      {/* Image background */}
      <div className="background">
        <img src={driver} alt="bakkie driver" className="background-img" />
      </div>
      {/* Call to action texts and button as well as the image preview of the app */}
      <div className="cta-panel">
        <div className="cta-details">
          <div className="download-details">
            <h2 className="cta-text">
              Get the Bakkiego App now! From all the google play app store
            </h2>
            <h5 className="cta-desc">
              Bakkiego is available on Google Playstore. Download now and
              experience delivery at a fair price.
            </h5>
            <div className="download-btn">
              <a href="https://play.google.com/store/apps/details?id=com.bakkiego.customer&pcampaignid=web_share">
                Get Bakkiego
              </a>
            </div>
          </div>

          {/* App image preview */}
          <div className="hand">
            <img src={hand} alt="App preview image" className="hand-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
