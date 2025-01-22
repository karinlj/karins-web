// import SocialIcons from "../SocialIcons";
import react_logo from "../../images/react_logo.png";
import contentful_logo from "../../images/contentful_logo.png";
import { Link } from "react-router-dom";

import logo from "../../images/K._dark.png";

const Footer = () => {
  return (
    <footer className="footer_section">
      <div
        className="container"
        style={{
          position: "relative",
        }}
      >
        {/* <SocialIcons /> */}
        <div>
          <a href="#nav">
            <img src={logo} alt="logo" className="logo_karin_web" />
          </a>
        </div>
        <h3 className="heading_2">Karin Ljunggren</h3>

        <div className="row justify-content-between">
          <div className="col-12 col-md-4">
          <p className="large_text white">Webbutvecklare</p>

            <p className="medium_text">
              Jag designar, bygger och förvaltar skräddarsydda webbplatser.
              Hjälper gärna till och drivs av att göra skillnad!{" "}
            </p>
          </div>
          <div className="col-12 col-md-4">
            <div className="right_align" id="#contact">
            <p className="large_text">
              Kontakta mig så här!
            </p>
            <p>email</p>
            <p>telefon</p>
            </div>
           
          </div>
        </div>

        <section className="footer_bottom_wrapper">
          <div>
            <section className="footer_logo_section">
              <p className="smallest_text">Powered by:</p>
              <div>
                <a href="https://react.dev/">
                  <img
                    src={react_logo}
                    title="React.js"
                    alt="React logo"
                    className="react_logo"
                    width={35}
                  />
                </a>
                <span>& </span>
                <a href="https://www.contentful.com/">
                  <img
                    src={contentful_logo}
                    title="Contentful"
                    alt="Contentful logo"
                    className="contentful_logo"
                    width={80}
                  />
                </a>
              </div>
            </section>
            <p className="footer_copy smallest_text">
              © {new Date().getFullYear()}- Karin Ljunggren
            </p>{" "}
          </div>
          <div className="back_to_top_link">
            <a href="#nav">
              <span className="to_top_icon">
                {" "}
                <i className="fas fa-angle-up"></i>
              </span>
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
