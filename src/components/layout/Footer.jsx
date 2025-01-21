
// import SocialIcons from "../SocialIcons";
import react_logo from "../../images/react_logo.png";
import contentful_logo from "../../images/contentful_logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer_section">
    <div
      className="container"
      style={{
        paddingTop: "3rem",
        position: "relative",
      }}
    >
      {/* <SocialIcons /> */}
      <h3 className="heading_2">Karin Ljunggren</h3>
      <div className="large_text white"><p>Webbutvecklare</p>
      </div>
        <section className="footer_logo_section">
          <p className="smaller_text">Powered by:</p>
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
            <span style={{ fontSize: "1.2rem", padding: "0 1rem" }}>& </span>
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
    
        <section className="footer_bottom_wrapper">

      <p className="footer_copy">
        © {new Date().getFullYear()}- Karin Ljunggren
      </p>{" "}

      <div className="back_to_top_link">
          <Link href="#nav">
            <span className="to_top_icon">
              {" "}
              <i className="fas fa-angle-up"></i>             
            </span>
          </Link>
        </div>
      </section>
    </div>
  </footer>
  );
};
export default Footer;
