import React from "react";
import "./App.css";
import Home from "./page/Home";
import { Routes, Route } from "react-router-dom";
import Video from "./page/Video";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video:id" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;
