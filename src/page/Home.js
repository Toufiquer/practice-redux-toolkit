import React from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import Pagination from "../components/Pagination/Pagination";
import Tags from "../components/Tags/Tags";
import VideoGrid from "../components/VideoGrid/VideoGrid";

const Home = () => {
  return (
    <>
      {/* <!-- navigation --> */}
      <Nav />

      {/* <!-- Tags --> */}
      <Tags />

      {/* <!-- Video Grid --> */}
      <VideoGrid />

      {/* <!-- pagination--> */}
      <Pagination />

      {/* <!-- footer --> */}
      <Footer />
    </>
  );
};

export default Home;
