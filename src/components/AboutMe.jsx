import { useEffect, useState } from "react";
import { getAboutData as getAboutData_API } from "../karinWeb_api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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

  const { heading, content, mePict } = aboutData.fields;
  const mePictSrc = `https:${mePict.fields.file.url}`;
  const mePictTitle = mePict.fields.title;

  return (
    <section className="about_me_section" id="about_me">
      <section className="content_section">
        <div className="container">
          <h2 className="small_heading dark">{heading}</h2>

          <div className="row justify-content-between">
            <div className="col-12 col-md-6 col-xl-8">
              <div className="large_text">
              {aboutData ? (
                <>
                  <div>
                    {aboutData ? documentToReactComponents(content) : ""}
                  </div>
                </>
              ) : (
                ""
              )}
                </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
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
          <p className="link_text">
            Ta en titt på ett urval av mina&nbsp;
            <a href="#cases" className="projects_link">
              Projekt
            </a>
          </p>
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
