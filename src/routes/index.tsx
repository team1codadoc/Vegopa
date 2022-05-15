import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainChoice from "../pages/main";
import MethodChoice from "../pages/method";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainChoice />} />
        <Route path="/method" element={<MethodChoice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
