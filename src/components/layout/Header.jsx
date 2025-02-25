import { useState, useEffect } from "react";
import Navlinks from "./Navlinks";
import { NavLink } from "react-router-dom";
import ToggleBtn from "../../components/ToggleBtn";
import logo from "../../images/K._white.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    //menu open class toggle and btn rotate class toggle
    setMobileOpen(!mobileOpen);
  };
  const clickLink = () => {
    if (mobileOpen) {
      //menu open class removed
      setMobileOpen(false);
    }
  };

  //prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      //console.log("mobileOpen:", mobileOpen);
      document.body.classList.add("no_scroll");
    } else {
      document.body.classList.remove("no_scroll");
    }
  }, [mobileOpen]);

  return (
    <header className="nav_header" id="nav">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col">
            <NavLink to="/" onClick={clickLink} className="logo_link">
              <img src={logo} alt="logo" className="logo_karin_web" />
            </NavLink>
          </div>

          <div className="col col-md-8">
            <nav className="navbar_bigscreen">
              <Navlinks />
            </nav>
            <ToggleBtn toggleMenu={toggleMenu} mobileOpen={mobileOpen} />
          </div>

          <nav
            className={`navbar_mobile ${
              mobileOpen ? "navbar_mobile_open" : ""
            }`}
          >
            <Navlinks clickLink={clickLink} />
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
