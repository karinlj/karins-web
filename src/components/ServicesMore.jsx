import { useState, useEffect } from "react";
import { getSericesMoreItemsData as getSericesMoreItemsData_API } from "../karinWeb_api";


const ServicesMore = () => {
  const [sericesMoreItems, setSericesMoreItems] = useState([]);

  // The CURRENTTARGET property always refers to the element whose event listener triggered the event,
  //  opposed to the TARGET  property, which returns the element that triggered the event.
  const [openAccordion, setOpenAccordion] = useState(false);

  const toggleAccordion = (e) => {
    e.currentTarget.classList.toggle("open");
    setOpenAccordion(!openAccordion);
  };

  const getSericesMoreItems = async () => {
    try {
      const data = await getSericesMoreItemsData_API();
      console.log("SericesMoreItems_data", data);
      setSericesMoreItems(data);
    } catch (error) {
      console.error("Error fetching SericesMoreItems items data:", error);
    }
  };
  useEffect(() => {
    getSericesMoreItems();
    // return () => {
    //   second
    // }
  }, []);

  if (!sericesMoreItems) {
    return <div className="loading">Loading ...</div>;
  }

  return (
    <section className="services_more_section" id="services_more">
      <div className="container">
        <h2 className="small_heading">Mer om min tjänster.</h2>
      </div>
      <section className="content_section">
        <div className="container">
          {/* item */}

          {sericesMoreItems && sericesMoreItems.map((item, index)=> {
            return(
            
              <button key={index}
            className="accordion_btn"
            onClick={toggleAccordion}
            aria-label="Service content"
            aria-expanded={openAccordion ? "true" : "false"}
          >
            <div className="heading">
              <h4 className="accordion_heading">{item.fields.heading}</h4>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <p className="cv_content">{item.fields.description}</p>
          </button>
            )
          })}



          {/* <button
            className="accordion_btn"
            onClick={toggleAccordion}
            aria-label="Service content"
            aria-expanded={openAccordion ? "true" : "false"}
          >
            <div className="heading">
              <h4 className="accordion_heading">{heading}</h4>
            </div>
            <p className="cv_content">{description}</p>
          </button> */}
        </div>
      </section>
    </section>
  );
};

export default ServicesMore;
