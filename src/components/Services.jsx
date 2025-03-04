import { useEffect, useState } from "react";
import {
  getServicesData as getServicesData_API,
  getServiceItemData as getServiceItemData_API,
} from "../karinWeb_api";
import { HashLink } from "react-router-hash-link";

const Services = () => {
  const [servicesData, setServicesData] = useState(null);
  const [servicesItems, setServicesItems] = useState([]);

  const getServicesData = async () => {
    try {
      const data = await getServicesData_API();
      setServicesData(data);
    } catch (error) {
      console.error("Error fetching services data:", error);
    }
  };

  const getServicesItems = async () => {
    try {
      const data = await getServiceItemData_API();
      setServicesItems(data);
    } catch (error) {
      console.error("Error fetching service items data:", error);
    }
  };

  useEffect(() => {
    getServicesData();
    getServicesItems();
  }, []);

  if (!servicesData || !servicesItems) {
    return <div className="loading">Loading ...</div>;
  }
  const { heading, description, linkText, newsBannerHeading, newsBannerText } =
    servicesData.fields;

  return (
    <section className="services_section" id="services">
      <div className="container">
        <h2 className="small_heading">{heading}</h2>
      </div>
      <section className="content_section large_text white">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-4">
              <p className="services_section_description">{description}</p>
            </div>
            <div className="col-12 col-lg-8">
              <section className="service_items_section">
                <div className="container">
                  <div className="row justify-content-between">
                    {servicesItems &&
                      servicesItems.map((item, index) => {
                        return (
                          <div className="col-12 col-sm-6" key={index}>
                            <div className="styled_card">
                              <img
                                src={item.fields.image.fields.file.url}
                                alt={item.fields.image.fields.title}
                                className=""
                                style={{ width: "100%", height: "100%" }}
                              />
                              <h3 className="medium_text">
                                {item.fields.heading}
                              </h3>
                              <p className="styled_card_text ">
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
            <h3 className="heading_2">{newsBannerHeading}</h3>
            <p>{newsBannerText}</p>
          </section>

          <div className="link_text">
            <HashLink to="#services_more" className="section_link">
              {linkText}
            </HashLink>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
