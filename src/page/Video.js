import React from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import VideoSection from "../components/VideoSection/VideoSection";

const Video = () => {
  return (
    <>
      {/* <!-- navigation --> */}
      <Nav />

      <VideoSection />

      {/* <!-- footer --> */}
      <Footer />
    </>
  );
};

export default Video;
