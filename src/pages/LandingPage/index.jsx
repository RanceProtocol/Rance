import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import More from "./components/More";
import Footer1 from './components/Footer1';

import "./index.css";

const index = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <div id="about" className="bg-darkGray p-10">
        <About />
        <More />
      </div>
      <Footer1/>
    </div>
  );
};

export default index;
