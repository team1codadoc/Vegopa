import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FoodSelectPage from "../pages/FoodSelectPage";
import GameResult from "../pages/GameResult";
import MbtiResultPage from "../pages/MbtiResultPage";
import MbtiSelectPage from "../pages/MbtiSelectPage";
import MbtiLoading from "../components/MbtiLoading";
import Restaurant from "../pages/RestaurantPage";
import MainChoice from "../pages/MainChoice";
import MethodChoice from "../pages/MethodPage";
import EatTogether from "../pages/TogetherPage";
import Login from "../pages/login";
import SignIn from "../pages/signin";
import Main from "../pages/MainPage";
import SearchParty from "../pages/SearchParty";
import CreateParty from "../pages/CreateParty";
import PartyDetailPage from "../pages/PartyDetailPage";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mainChoice" element={<MainChoice />} />
        <Route path="/restaurant/:query" element={<Restaurant />} />
        <Route path="/select/result" element={<MbtiResultPage />} />
        <Route
          path="/select/loading"
          element={<MbtiLoading title="결과 분석 페이지" subtitle="결과를 분석 중 입니다." path="/select/result" />}
        />
        <Route
          path="/soloEat/loading"
          element={<MbtiLoading title="메뉴 선택 페이지" subtitle="메뉴를 선택 중 입니다." path="/soloEat/result" />}
        />
        <Route path="/soloEat/result" element={<GameResult />} />
        <Route path="/select/:problem" element={<MbtiSelectPage />} />
        <Route path="/soloEat/:problem" element={<FoodSelectPage />} />
        <Route path="/method" element={<MethodChoice />} />
        <Route path="/together" element={<EatTogether />} />
        <Route path="/together/login" element={<Login />} />
        <Route path="/together/signin" element={<SignIn />} />
        <Route path="/together/searchParty" element={<SearchParty />} />
        <Route path="/together/createParty" element={<CreateParty />} />
        <Route path="/party/:id" element={<PartyDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
