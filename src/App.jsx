import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Business from "./components/business/business";
import About from './components/about/About'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/business" element={<Business />} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
