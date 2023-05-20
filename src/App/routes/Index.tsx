import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../UI/pages/Home/Home";
import Contact from "../UI/pages/Contact/Contact";
import About from "../UI/pages/About/About";
import Product from "../UI/pages/Product/Product";
import Bookings from "../UI/pages/Bookings/Bookings";
import Community from "../UI/pages/Community/Community";
import Services from "../UI/pages/Services/Services";
import Pricing from "../UI/pages/Pricing/Pricing";

const Index: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/bookings" element={<Bookings/>}/>
        <Route path="/community" element={<Community/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
