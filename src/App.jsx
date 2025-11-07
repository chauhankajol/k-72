import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Agence from "./Pages/Agence";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "./components/Navigation/Navbar";
import Fullscreennav from "./components/Navigation/Fullscreennav";


const App = () => {
  return (
    <div className="overflow-x-hidden">
    <Navbar/>
    <Fullscreennav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="agence" element={<Agence />} />
      </Routes>
    </div>
  );
};

export default App;
