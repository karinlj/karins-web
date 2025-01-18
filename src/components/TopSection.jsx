import { useEffect, useState } from "react";
import { getTopData as getTopData_API } from "../karinWeb_api";
import arrow from "../images/arrow_green.png";

const TopSection = () => {
  const [topData, setTopData] = useState(null);

  const getTopData = async () => {
    try {
      const data = await getTopData_API();
      console.log("top_data", data);
      setTopData(data);
    } catch (error) {
      console.error("Error fetching top data:", error);
    }
  };

  // const abortContrl = new AbortController();
  useEffect(() => {
    getTopData();
    //clean up
    // return () => {
    //   abortContrl.abort();
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Make sure data is not undefined
  if (!topData) {
    return <div className="loading">Loading ...</div>;
  }

  const { topPreamble, title, description, ctaLink, ctaText } = topData.fields;

  return (
    <section className="top_section" id="top_section">
      <section className="content_section white">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-lg-6">
              <h2 className="small_heading">{topPreamble}</h2>
              <h1 className="heading_3">{title}</h1>
            </div>
            <div className="col-12 col-lg-5">
              <p className="medium_text right">{description}</p>
              <img src={arrow} alt="arrow" className="arrow_pict" />
              {/* {topData? (
                  <>
                  <h1>Behöver</h1>
                  </>
                ): (
                  ""
                )} */}
            </div>
          </div>
          <a href={ctaLink} className="btn_link">
            {ctaText}
          </a>
          {/* <p className="home_links">
              Take a look at my {" "}
              <Link href={`/`} className="projects_link">
                {" "}
                Client Projects
              </Link>{" "}
              or my{" "}
              <Link href={`/`} className="projects_link">
                {" "}
                Personal Projects
              </Link>
            </p> */}
        </div>
      </section>
    </section>
  );
};

export default TopSection;
