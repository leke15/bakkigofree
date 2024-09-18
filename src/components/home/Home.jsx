import Features from "../services/Features";
import DownloadApp from "../../components/downloadApp/DownloadApp";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import ServiceLanding from "../services/ServiceLanding";
import Navbar from "./Navbar";
import "./home.css";

const Home = () => {
  return (
    <section className="container">
      <meta property="Bakkiego" content="An app making moving with bakkies easier"></meta>
      <Navbar />
      <div className="landing-container">
        <div>
          <h2 className="motto">
            Move Your <br />
            Goods <br /> Anywhere <br />
            AnyTime
          </h2>
          
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
