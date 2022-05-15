import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import SelectPage from "../pages/SelectPage/SelectPage";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/select" element={<SelectPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default RootRoute;
