
import {  useEffect, useState } from "react";
 import { getTopData as getTopData_API } from "../karinWeb_api";

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

  const topPreamble = topData.fields.preamble;
  const topTitle = topData.fields.title;
  const topDescription = topData.fields.description;
  const topExtra = topData.fields.extraText;

    return ( 
    <section className="top_section">
        <section className="top_section_content">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-12 col-lg-6">
                <p className="home_small_heading">{topPreamble}</p>
              <h1 className="heading_3 dark">{topTitle}</h1>
              <p className="top_section_description">{topExtra}</p>

              </div>
              <div className="col-12 col-lg-5">
              <p className="top_section_description right">{topDescription}
                </p>
                {/* {topData? (
                  <>
                  <h1>Behöver</h1>
                  </>
                ): (
                  ""
                )} */}
         
              </div>
            </div>
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
      </section> );
}
 
export default TopSection;