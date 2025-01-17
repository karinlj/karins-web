import {  useEffect, useState } from "react";
// import { client } from "../../client";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import TopSection from "../components/TopSection";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";


const Home = () => {

  //stop the fetch when component using it unmounts
//   const abortContrl = new AbortController();

  //   const getAboutData = () => {
  //     client
  //       .getEntries({
  //         content_type: "aboutData",
  //         signal: abortContrl.signal,
  //       })
  //       .then((response) => {
  //         setAboutData(response.items[0] as any);
  //         setLoadingAbout(false);
  //       })
  //       .catch((error) => console.log("error", error));
  //   };

  useEffect(() => {
    //clean up
    // return () => {
    //   abortContrl.abort();
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="main">

<TopSection/>
<AboutMe/>
<Services/>

  </main>
  )
};
export default Home;
