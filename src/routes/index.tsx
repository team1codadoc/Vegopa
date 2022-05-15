import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import GameResult from "../pages/GameResult";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/soloEat/result" element={<GameResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
