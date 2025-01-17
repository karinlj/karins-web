import { useEffect, useState } from "react";
import { getAboutData as getAboutData_API } from "../karinWeb_api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import skill_icons from "../images/iconsFrame.png";

const AboutMe = () => {
  const [aboutData, setAboutData] = useState(null);

  const getAboutData = async () => {
    try {
      const data = await getAboutData_API();
      setAboutData(data);
    } catch (error) {
      console.error("Error fetching about data:", error);
    }
  };

  useEffect(() => {
    getAboutData();
    // console.log("aboutData:", aboutData);
  }, []);

  if (!aboutData) {
    return <div className="loading">Loading ...</div>;
  }

  const heading = aboutData.fields.heading;
  const content = aboutData.fields.content;
  const mePict = aboutData?.fields.mePict;
  const mePictSrc = `https:${mePict.fields.file.url}`;
  const mePictTitle = mePict.fields.title;

  return (
    <section className="about_me_section">
      <section className="content_section large_text white">
        <div className="container">
        <h2 className="small_heading">{heading}</h2>

          <div className="row justify-content-between">
            <div className="col-12 col-lg-6 col-xl-8">
              {aboutData ? (
                <>
                  <div>
                    {aboutData ? documentToReactComponents(content) : ""}
                  </div>
                </>
              ) : (
                ""
              )}

              <div>
                <img
                  src={skill_icons}
                  alt="skill_icons"
                  className=""
                  style={{ width: "400px", height: "auto", marginTop: "2rem" }}
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-4">
              <div className="styled_card pict">
                {aboutData ? (
                  <>
                    <img
                      src={mePictSrc}
                      alt={mePictTitle}
                      className="me_pict"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
