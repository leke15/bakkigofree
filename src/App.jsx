import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Service from "./components/services/Service";
import Business from "./components/business/business";
import About from "./components/about/About";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Service" element={<Service />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
