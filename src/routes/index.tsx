import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FoodSelectPage from "../pages/foodSelectPage";
import Main from "../pages/main";
import Login from "../pages/login";
import Signin from "../pages/signin";
import GameResult from "../pages/GameResult";
import MbtiResultPage from "../pages/mbtiResultPage";
import MbtiSelectPage from "../pages/mbtiSelectPage";
import { MbtiLoading } from "../pages/mbtiResultPage/MbtiLoading";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/select/result" element={<MbtiResultPage />} />
        <Route path="/withEat/login" element={<Login/>} />
        <Route path="/withEat/signin" element={<Signin/>} />
        <Route path="/select/loading" element={<MbtiLoading />} />
        <Route path="/soloEat/result" element={<GameResult />} />
        <Route path="/select/:problem" element={<MbtiSelectPage />} />
        <Route path="/soloEat/:problem" element={<FoodSelectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
