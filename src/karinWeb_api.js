import { client } from "./client";
// const abortContrl = new AbortController();

export const getTopData = async () => {
  try {
    const response = await client.getEntry("7fFog2o2OZxluuQG1AkwSG");

    if (!response) {
      throw new Error("No OK Top data response");
    }
    //  console.log("top_response:", response);
    return response;
  } catch (err) {
    console.log("error: ", err);
  }
};

export const getAboutData = async () => {
  try {
    const response = await client.getEntry("3ormbmGrRZtJVb4KcHq0n7");
    if (!response) {
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
    if (!response) {
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
      throw new Error("No OK ServiceItem data response");
    }
    //    console.log("serviceItem_response:", response);
    const dataFields = response.items;
    return dataFields;
  } catch (err) {
    console.log("error: ", err);
  }
};
export const getCaseItemsData = async () => {
  try {
    const response = await client.getEntries({
      content_type: "caseItem",
      order: "fields.orderNumber",
    });
    if (!response || !response.items) {
      throw new Error("No OK CaseItems data response");
    }
    //  console.log("CaseItems_response:", response);
    const dataFields = response.items;
    return dataFields;
  } catch (err) {
    console.log("error: ", err);
  }
};
export const getTestimonialItemsData = async () => {
  try {
    const response = await client.getEntries({
      content_type: "testimonialItem",
      order: "fields.orderNumber",
    });
    if (!response || !response.items) {
      throw new Error("No OK testimonialItems data response");
    }
      // console.log("testimonialItems_response:", response);
    const dataFields = response.items;
    return dataFields;
  } catch (err) {
    console.log("error: ", err);
  }
};
export const getWorkProcessData = async () => {
  try {
    const response = await client.getEntry("7jhEeCzomoY34LUyToCfos");
    if (!response) {
      throw new Error("No OK WorkProcess data response");
    }
    //  console.log("WorkProcess_response:", response);
    return response;
  } catch (err) {
    console.log("error: ", err);
  }
};
export const getTimeLineItemsData = async () => {
  try {
    const response = await client.getEntries({
      content_type: "timelineItem",
      order: "fields.orderNumber",
    });
    if (!response || !response.items) {
      throw new Error("No OK timelineItems data response");
    }
    //  console.log("timelineItems_response:", response);
    const dataFields = response.items;
    return dataFields;
  } catch (err) {
    console.log("error: ", err);
  }
};

export const getSericesMoreItemsData = async () => {
  try {
    const response = await client.getEntries({
      content_type: "servicesMoreItem",
       order: "fields.orderNumber",
    });

    if (!response || !response.items) {
             throw new Error("No OK SericesMoreItems data response");
    }

    // console.log("SericesMoreItems_response:", response);
    const dataFields = response.items;
    return dataFields;
  } catch (error) {
    console.log("error_XXXX: ", error);
  }
};




// export const getSericesMoreItemsData = async () => {
//   try {
//     const response = await client.getEntries({
//       content_type: "ServicesMoreItem",
//       order: "fields.orderNumber",

//     });
//     if (!response || !response.items) {
//       throw new Error("No OK SericesMoreItems data response");
//     }
//     console.log("SericesMoreItems_response:", response);
//     const dataFields = response.items;
//     return dataFields;
//   } catch (err) {
//     console.log("error_XXXX: ", err);
//   }
// };
