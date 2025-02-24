import {
  getWorkProcessData as getWorkProcessData_API,
  getTimeLineItemsData as getTimeLineItemsData_API,
} from "../karinWeb_api";
import { useState, useEffect } from "react";
import arrow from "../images/arrow_lila.png";

const Process = () => {
  const [timelineItems, setTimelineItems] = useState([]);
  const [workProcess, setWorkProcess] = useState(null);

  const getWorkProcessData = async () => {
    try {
      const data = await getWorkProcessData_API();
      // console.log("WorkProcess_data", data);
      setWorkProcess(data);
    } catch (error) {
      console.error("Error fetching WorkProcess data:", error);
    }
  };
  const getTimeLineItems = async () => {
    try {
      const data = await getTimeLineItemsData_API();
      // console.log("TimeLineItems_data", data);
      setTimelineItems(data);
    } catch (error) {
      console.error("Error fetching TimeLineItems items data:", error);
    }
  };
  useEffect(() => {
    getWorkProcessData();
    getTimeLineItems();
    // return () => {
    //   second
    // }
  }, []);

  if (!workProcess || !timelineItems) {
    return <div className="loading">Loading ...</div>;
  }

  const { heading, description, text } = workProcess.fields;
  return (
    <section className="process_section" id="process">
      <div className="container">
        <h2 className="small_heading white">{heading}</h2>
      </div>
      <section className="content_section white">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md-6">
              <p className="large_text">{description}</p>
              <p className="medium_text">{text}</p>

              <img src={arrow} alt="arrow pict" className="arrow_pict" />
            </div>

            <div className="col-12 col-lg-6">
              {/* timeline */}
              <div className="timeline">
                {timelineItems &&
                  timelineItems.map((item, index) => {
                    let alignClass;
                    {
                      item.fields.orderNumber % 2 === 0
                        ? (alignClass = "right")
                        : (alignClass = "left");
                    }
                    return (
                      <div className={`timeline_container ${alignClass}`} key={index}>
                        <div className="timeline_content">
                          <h4>{item.fields.heading}</h4>
                          <p className="smaller_text">{item.fields.description}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Process;
