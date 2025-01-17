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
      console.log("data", data);
      setServicesData(data);
    } catch (error) {
      console.error("Error fetching services data:", error);
    }
  };

  const getServicesItems = async () => {
    try {
      const data = await getServiceItemData_API();
      console.log("data", data);
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

  const heading = servicesData.fields.heading;
  const description = servicesData.fields.description;
  const moreAboutLinkText = servicesData.fields.linkText;
  const moreAboutLink = servicesData.fields.link;

  return (
    <section className="services_section">
      <div className="container">
        <h2 className="small_heading">{heading}</h2>
      </div>
      <section className="content_section large_text white">
        <div className="container">
          <p>{description}</p>
          <div className="row justify-content-center align-items-center">
            <div className="col-10">
            <section className="service_items_section">

              {servicesItems &&
                servicesItems.map((item, index) => {
                  return (
                    <div className="col-12 col-md-6" key={index}>

                      <div className="styled_card">
                        <img
                          src={item.fields.image.fields.file.url}
                          alt={item.fields.image.fields.title}
                          className="me_pict"
                          style={{ width: "100%", height: "100%" }}
                        />

                        <h3>{item.fields.heading}</h3>
                        <p className="service_item_description">{item.fields.description}</p>
                      </div>

                    </div>
                  );
                })}
              <div className="text-center">
                {" "}
                <a href={moreAboutLink} className="services_link">
                  {moreAboutLinkText}
                </a>
              </div>
              </section>
            </div>
          </div>
          </div>
      </section>
    </section>
  );
};

export default Services;
