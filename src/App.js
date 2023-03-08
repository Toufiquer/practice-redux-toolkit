import React, { useEffect } from "react";
import "./App.css";
import Home from "./page/Home";
import { Routes, Route } from "react-router-dom";
import Video from "./page/Video";
import { useDispatch } from "react-redux";
import { fetchVideos } from "./redux/features/videos/VideoSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(fetchVideos(), " => Line No: 11");
    dispatch(fetchVideos());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;
