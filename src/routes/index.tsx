import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FoodSelectPage from "../pages/foodSelectPage";
import GameResult from "../pages/GameResult";
import MbtiResultPage from "../pages/mbtiResultPage";
import MbtiSelectPage from "../pages/mbtiSelectPage";
import MbtiLoading from "../pages/mbtiResultPage/MbtiLoading";
import Restaurant from "../pages/Restaurant";
import MainChoice from "../pages/MainChoice";
import MethodChoice from "../pages/method";
import EatTogether from "../pages/foodSelectPage/togetherPages/together";
import UserSearch from "../pages/foodSelectPage/togetherPages/UserSearch";
import StartGroup from "../pages/foodSelectPage/togetherPages/startGroup";
import Main from "../pages/main";
import { HeaderComponent } from "../components/Header";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />
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
        <Route path="/together/search" element={<UserSearch />} />
        <Route path="/together/startGroup" element={<StartGroup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
