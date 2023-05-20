import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../UI/pages/Home/Home";
import Contact from "../UI/pages/Contact/Contact";
import About from "../UI/pages/About/About";
import Portfolio from "../UI/pages/Portfolio/Portfolio";

const Index: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
