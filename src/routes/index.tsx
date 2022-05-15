import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import Restaurant from "../pages/restaurant";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/restaurant" element={<Restaurant />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
