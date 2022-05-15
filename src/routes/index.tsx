import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import GameResult from "../pages/GameResult";
import MbtiResultPage from "../pages/mbtiResultPage";
import MbtiSelectPage from "../pages/mbtiSelectPage";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/select/result" element={<MbtiResultPage />} />
        <Route path="/soloEat/result" element={<GameResult />} />
        <Route path="/select/:problem" element={<MbtiSelectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
