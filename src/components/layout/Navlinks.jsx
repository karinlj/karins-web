/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
// import SocialIcons from "../SocialIcons";

const Navlinks = ({ clickLink }) => {
  return (
    <>
      <div className="link_item home_link">
        {/* <NavLink to="/" exact onClick={clickLink} className="link cursive">
          Karin
        </NavLink> */}
               <NavLink to="/"  onClick={clickLink} className="link cursive">
          Karins Web
        </NavLink>
      </div>
      <div className="nav_links">
        <ul className="nav_links_list">
          <li className="link_item">
            <NavLink to="/" onClick={clickLink} className="link">
              Om mig
            </NavLink>
          </li>
          <li className="link_item">
            <NavLink
              to="/personalProjects"
              onClick={clickLink}
              className="link"
            >
              Tjänster
            </NavLink>
          </li>
          <li className="link_item">
            <NavLink to="/" onClick={clickLink} className="link">
              Kontakt
            </NavLink>
          </li>
        </ul>
        <div className="social_icons">
          {/* <SocialIcons /> */}
        </div>
      </div>
    </>
  );
};
export default Navlinks;
