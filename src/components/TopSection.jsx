import { useEffect, useState } from "react";
import { getTopData as getTopData_API } from "../karinWeb_api";
import arrow from "../images/arrow_green_9.png";

const TopSection = () => {
  const [topData, setTopData] = useState(null);

  const getTopData = async () => {
    try {
      const data = await getTopData_API();
      setTopData(data);
    } catch (error) {
      console.error("Error fetching top data:", error);
    }
  };

  useEffect(() => {
    getTopData();
  }, []);

  // Make sure data is not undefined
  if (!topData) {
    return <div className="loading">Loading ...</div>;
  }
  const { preamble, title, description, ctaLink, ctaText } = topData.fields;

  return (
    <section className="top_section" id="top_section">
      <section className="content_section white">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-lg-6">
              <h2 className="small_heading">{preamble}</h2>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-lg-6">
              <h1 className="heading_1">{title}</h1>
            </div>
            <div className="col-12 col-lg-5">
              <p className="medium_text right_align">{description}</p>
              <img src={arrow} alt="arrow" className="arrow_pict" />
            </div>
          </div>

          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-lg-6">
              <div>
                <a href={ctaLink} className="btn_link">
                  {ctaText}
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TopSection;
