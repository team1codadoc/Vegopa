import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FoodSelectPage from "../pages/foodSelectPage";
import GameResult from "../pages/GameResult";
import MbtiResultPage from "../pages/mbtiResultPage";
import MbtiSelectPage from "../pages/mbtiSelectPage";
import MbtiLoading from "../pages/mbtiResultPage/MbtiLoading";
import Restaurant from "../pages/RestaurantPage";
import MainChoice from "../pages/MainChoice";
import MethodChoice from "../pages/MethodPage";
import EatTogether from "../pages/TogetherPage";
import Main from "../pages/MainPage";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mainChoice" element={<MainChoice />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/select/result" element={<MbtiResultPage />} />
        <Route path="/select/loading" element={<MbtiLoading />} />
        <Route path="/soloEat/result" element={<GameResult />} />
        <Route path="/select/:problem" element={<MbtiSelectPage />} />
        <Route path="/soloEat/:problem" element={<FoodSelectPage />} />
        <Route path="/method" element={<MethodChoice />} />
        <Route path="/together" element={<EatTogether />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
