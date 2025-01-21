/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

// import SocialIcons from "../SocialIcons";
import logo from "../../images/K._white.png";

const Navlinks = ({ clickLink }) => {
  return (
    <>
      <div>
        <NavLink to="/" onClick={clickLink} className="logo_link">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
      </div>
      <div className="nav_links">
        <ul className="nav_links_list">
          <li className="link_item">
            <HashLink to="#about_me" onClick={clickLink} className="link">
              Om mig
            </HashLink>
          </li>
          <li className="link_item">
            <HashLink
              to="#services"
              onClick={clickLink}
              className="link"
            >
              Tjänster
            </HashLink>
          </li>
          <li className="link_item">
            <HashLink to="#cases" onClick={clickLink} className="link">
              Cases
            </HashLink>
          </li>
          <li className="link_item">
            <HashLink to="#process" onClick={clickLink} className="link">
              Arbetsprocess
            </HashLink>
          </li>
          <li className="link_item">
            <HashLink to="#contact" onClick={clickLink} className="link">
              Kontakt
            </HashLink>
          </li>
        </ul>
        <div className="social_icons">{/* <SocialIcons /> */}SocialIcons</div>
      </div>
    </>
  );
};
export default Navlinks;
