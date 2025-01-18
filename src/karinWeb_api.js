import { client } from "./client";
// const abortContrl = new AbortController();

export const getTopData = async () => {
  try {
    const response = await client.getEntry("7fFog2o2OZxluuQG1AkwSG")

    if (!response) {
      throw new Error("No OK Home data response");
    }
     console.log("home_response:", response);
    return response;
  } catch (err) {
    console.log("error: ", err);
  }
};


export const getAboutData = async () => {
  try {
    const response = await client.getEntry("3ormbmGrRZtJVb4KcHq0n7");
    if (!response ) {
      throw new Error("No OK About data response");
    }
    // console.log("about_response:", response);
    return response;
  } catch (err) {
    console.log("error: ", err);
  }
};

export const getServicesData = async () => {
    try {
      const response = await client.getEntry("2z4kbC7BHkI0EnpG2Fv6s5");
      if (!response ) {
        throw new Error("No OK Services data response");
      }
      // console.log("services_response:", response);
      return response;
    } catch (err) {
      console.log("error: ", err);
    }
  };

  export const getServiceItemData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "serviceItem",
        order: "fields.orderNumber",

      });
      if (!response || !response.items) {
        throw new Error("No OK About data response");
      }
    //    console.log("serviceItem_response:", response);
      const dataFields = response.items;
      return dataFields;
    } catch (err) {
      console.log("error: ", err);
    }
  };
