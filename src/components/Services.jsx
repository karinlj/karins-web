import { useEffect, useState } from "react";
import {
  getServicesData as getServicesData_API,
  getServiceItemData as getServiceItemData_API,
} from "../karinWeb_api";

const Services = () => {
  const [servicesData, setServicesData] = useState(null);
  const [servicesItems, setServicesItems] = useState([]);

  const getServicesData = async () => {
    try {
      const data = await getServicesData_API();
      // console.log("Services_data", data);
      setServicesData(data);
    } catch (error) {
      console.error("Error fetching services data:", error);
    }
  };

  const getServicesItems = async () => {
    try {
      const data = await getServiceItemData_API();
      // console.log("ServicesItems_data", data);
      setServicesItems(data);
    } catch (error) {
      console.error("Error fetching service items data:", error);
    }
  };

  useEffect(() => {
    getServicesData();
    getServicesItems();
    // return () => {
    //   second
    // }
  }, []);

  if (!servicesData || !servicesItems) {
    return <div className="loading">Loading ...</div>;
  }
  const {
    heading,
    description,
    linkText,
    link,
    newsBannerHeading,
    newsBannerText,
  } = servicesData.fields; 

  return (
    <section className="services_section" id="services">
      <div className="container">
        <h2 className="small_heading">{heading}</h2>
      </div>
      <section className="content_section large_text white">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md-4">
              <p>{description}</p>
            </div>
            <div className="col-12 col-md-8">
              <section className="service_items_section">
                <div className="container">
                  <div className="row justify-content-between">
                    {servicesItems &&
                      servicesItems.map((item, index) => {
                        return (
                          <div className="col-12 col-md-6" key={index}>
                            <div className="styled_card">
                              <img
                                src={item.fields.image.fields.file.url}
                                alt={item.fields.image.fields.title}
                                className="service_item_pict"
                                style={{ width: "100%", height: "100%" }}
                              />

                              <h3>{item.fields.heading}</h3>
                              <p className="service_item_description">
                                {item.fields.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </section>
            </div>
          </div>

          <section className="services_news_banner">
            <h3>{newsBannerHeading}</h3>
            <p>{newsBannerText}</p>
          </section>

          <div className="">
            {" "}
            <a href={link} className="services_link">
              {linkText}
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
