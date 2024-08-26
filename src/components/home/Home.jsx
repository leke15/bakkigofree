import Features from "../services/Features";
import DownloadApp from "../../components/downloadApp/DownloadApp";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import ServiceLanding from "../services/ServiceLanding";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import "./home.css";

const Home = () => {
  return (
    <section className="container">
      <Navbar />
      <div className="landing-container">
        <div>
          <h2 className="motto">
            Move Your <br />
            Goods <br /> Anywhere <br />
            AnyTime
          </h2>
          <FontAwesomeIcon icon={faAnglesDown} id="scroll-down" />
        </div>
      </div>
      <ServiceLanding />
      <Features />
      <DownloadApp />
      <Contact />
      <Footer />
    </section>
  );
};

export default Home;
