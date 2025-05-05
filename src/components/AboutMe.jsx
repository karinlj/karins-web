import { useEffect, useState } from "react";
import { getAboutData as getAboutData_API } from "../karinWeb_api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { HashLink } from "react-router-hash-link";

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
  }, []);

  if (!aboutData) {
    return (
      <div className="container">
        <div className="loading">Loading ...</div>
      </div>
    );
  }
    const { heading, content, mePict } = aboutData.fields;
    const mePictSrc = `https:${mePict.fields.file.url}`;
    const mePictTitle = mePict.fields.title;
  

  return (
    <section className="about_me_section" id="about_me">
      <section className="content_section">
        <div className="container">
          {aboutData ? (
            <>
              <h2 className="small_heading dark">{heading}</h2>

              <div className="row justify-content-between">
                <div className="col-12 col-md-6 col-xl-8">
                  <div className="large_text">
                    {aboutData ? documentToReactComponents(content) : ""}
                  </div>
                  <div className="link_text">
                    Ta en titt på ett urval av mina&nbsp;
                    <HashLink to="#cases" className="section_link">
                      Projekt
                    </HashLink>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <div className="styled_card pict">
                    <img
                      src={mePictSrc}
                      alt={mePictTitle}
                      className="me_pict"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
