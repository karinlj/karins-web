/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
// import SocialIcons from "../SocialIcons";
import logo from "../../images/K._white.png";

const Navlinks = ({ clickLink }) => {
  return (
    <>
      {/* <div className="link_item home_link"> */}
      <div>
        <NavLink to="/" onClick={clickLink} className="logo_link">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
      </div>
      <div className="nav_links">
        <ul className="nav_links_list">
          <li className="link_item">
            <NavLink to="#about_me" onClick={clickLink} className="link">
              Om mig
            </NavLink>
          </li>
          <li className="link_item">
            <NavLink
              to="#services"
              onClick={clickLink}
              className="link"
            >
              Tjänster
            </NavLink>
          </li>
          <li className="link_item">
            <NavLink to="#cases" onClick={clickLink} className="link">
              Cases
            </NavLink>
          </li>
          <li className="link_item">
            <NavLink to="/" onClick={clickLink} className="link">
              Kontakt
            </NavLink>
          </li>
        </ul>
        <div className="social_icons">{/* <SocialIcons /> */}SocialIcons</div>
      </div>
    </>
  );
};
export default Navlinks;
