import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <main className={`main ${isDark ? "dark" : ""}`}>
      <section className="not_found_section" id="not_found_section">
        <section className="content_section white">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-lg-6">
                <h1 className="heading_1 text-center">404</h1>

                <div className="not_found_section_text text-center">
                  <h2 className="small_heading">There was a problem.</h2>
                  <p>We could not find the page you were looking for...</p>
                  <p >
                    Go back to the <NavLink to="/"> Start page.</NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default NotFound;
