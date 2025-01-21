import {
  getCaseItemsData as getCaseItemsData_API,
  getTestimonialItemsData as getTestimonialItemsData_API,
} from "../karinWeb_api";
import { useState, useEffect } from "react";

import shiatsu_logo from "../images/shiatsu_logo.png";
import boozang_logo from "../images/boozang_logo.png";
const Cases = () => {
  const [caseItems, setCaseItems] = useState([]);
  const [testimonialItems, setTestimonialItems] = useState([]);

  const getCaseItemsData = async () => {
    try {
      const data = await getCaseItemsData_API();
      setCaseItems(data);
    } catch (error) {
      console.error("Error fetching caseItems data:", error);
    }
  };

  const getTestimonialItemsData = async () => {
    try {
      const data = await getTestimonialItemsData_API();
      setTestimonialItems(data);
    } catch (error) {
      console.error("Error fetching TestimonialItems data:", error);
    }
  };
  useEffect(() => {
    getCaseItemsData();
    getTestimonialItemsData();
    //   return () => {
    //     second
    //   }
  }, []);

  if (!caseItems || !testimonialItems) {
    return <div className="loading">Loading ...</div>;
  }
  return (
    <section className="cases_section" id="cases">
      <div className="container">
        <h2 className="small_heading">ETT URVAL AV MINA NÖJDA KUNDER</h2>
      </div>
      <section className="content_section">
        <section className="testimonial_items_section">
          <div className="container">
            <div className="row justify-content-between">
              {testimonialItems &&
                testimonialItems.map((item, index) => {
                  return (
                    <div className="col-12 col-sm-6" key={index}>
                      <div className="testimonial_item">
                        <p className="medium_text">
                          <span>
                            {" "}
                            <i className="fa-solid fa-quote-left"></i>
                          </span> &nbsp;
                          {item.fields.quote}
                          <span>
                            {" "}
                            &nbsp; <i className="fa-solid fa-quote-right"></i>
                          </span>
                        </p>

                        <p className="testimonial_item_name">
                          {item.fields.name}
                        </p>
                        <p className="medium_text">{item.fields.company}</p>
                        {/* <img src={shiatsu_logo} alt="shiatsu_logo" style={{width: "200px"}}/>
                        <img src={boozang_logo} alt="boozang_logo" style={{width: "200px"}}/> */}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
        <section className="case_items_section">
          <div className="container">
            <div className="row justify-content-between">
              {caseItems &&
                caseItems.map((item, index) => {
                  return (
                    <div className="col-12 col-sm-4" key={index}>
                      <div className="styled_card">
                        <a
                          href={item.fields.link}
                          className="case_item_link"
                          target="_blanc"
                        ></a>
                        <img
                          src={item.fields.image.fields.file.url}
                          alt={item.fields.image.fields.title}
                          className="case_item_pict"
                          style={{ width: "100%", height: "100%" }}
                        />

                        <h3 className="case_item_heading">
                          {item.fields.heading}
                        </h3>
                        <p className="medium_text">{item.fields.description}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Cases;
