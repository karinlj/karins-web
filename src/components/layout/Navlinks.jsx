import { HashLink } from "react-router-hash-link";
import SocialIcons from "../SocialIcons";

const Navlinks = ({ clickLink }) => {
  return (
    <>
      <div className="nav_links">
        <ul className="nav_links_list">
          <li className="link_item">
            <HashLink to="/#about_me" onClick={clickLink} className="link">
              Om mig
            </HashLink>
          </li>
          <li className="link_item">
            <HashLink to="/#services" onClick={clickLink} className="link">
              Tjänster
            </HashLink>
          </li>
          <li className="link_item">
            <HashLink to="/#case" onClick={clickLink} className="link">
              Case
            </HashLink>
          </li>
          <li className="link_item">
            <HashLink to="/#contact" onClick={clickLink} className="link">
              Kontakt
            </HashLink>
          </li>
        </ul>
        <div className="social_icons">
          <SocialIcons />
        </div>
      </div>
    </>
  );
};
export default Navlinks;
