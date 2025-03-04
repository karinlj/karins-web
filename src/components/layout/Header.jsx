import { useState, useEffect } from "react";
import Navlinks from "./Navlinks";
import { NavLink } from "react-router-dom";
import ToggleBtn from "../../components/ToggleBtn";
import logo from "../../images/K._white.png";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
  const { isDark, toggleMode } = useContext(ThemeContext);
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
    <header className={`nav_header ${isDark ? "dark" : ""}`} id="nav">
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
          <button className="theme_switch" onClick={toggleMode}>
                {isDark ? (
                  <i
                    className="fas fa-sun"
                    aria-hidden="true"
                    aria-label="Light Mode"
                  ></i>
                ) : (
                  <i
                    className="fas fa-moon"
                    aria-hidden="true"
                    aria-label="Dark Mode"
                  ></i>
                )}
              </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
