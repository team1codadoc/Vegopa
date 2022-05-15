import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import ChoicResult from "../pages/ChoicResult";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="soloEat/result" element={<ChoicResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
