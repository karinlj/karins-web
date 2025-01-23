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
          <div className="col-12 col-md-6 col-xl-4">
          <p className="large_text white">Webbutvecklare</p>

            <p className="medium_text">
              Jag designar, bygger och förvaltar skräddarsydda webbplatser.
              Hjälper gärna till och drivs av att göra skillnad!{" "}
            </p>
          </div>

          <div className="col-12 col-md-6 col-xl-4">
            <div className="right_align" id="contact">
              <p className="large_text">
                {/* Kontakta mig så här! */}
                {/* Du är välkommen att kontakta mig för mer information och för kostnadsförslag. */}
                Kontakta mig så här för mer information och för kostnadsförslag.
              </p>
              <div className="contact_ways">
                <p>
                  <span>
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  Skriv till mig:{" "}
                </p>
                <a href="mailto: kaljunggren@gmail.com" className="section_link">
                  kaljunggren@gmail.com
                </a>
              </div>

              <div className="contact_ways">
                <p>
                  <span>
                    <i className="fa-solid fa-mobile-screen-button"></i>
                  </span>
                  Slå en signal:{" "}
                </p>
                <a href="tel:+46768514619" className="section_link">0768514619</a>
              </div>
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
