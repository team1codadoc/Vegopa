import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FoodSelectPage from "../pages/foodSelectPage/index";
import ChoiceResult from "../pages/ChoiceResult";
import MbtiResultPage from "../pages/mbtiResultPage";
import MbtiSelectPage from "../pages/mbtiSelectPage";
import MbtiLoading from "../pages/mbtiResultPage/MbtiLoading";
import Restaurant from "../pages/Restaurant";
import MainChoice from "../pages/MainChoice";
import MethodChoice from "../pages/method";
import PartyChoice from "../pages/togetherPages/PartyChoice";
import SearchParty from "../pages/togetherPages/SearchParty";
import SearchSuggested from "../pages/togetherPages/SearchSuggested";
import JoinParty from "../pages/togetherPages/JoinParty";
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
        <Route path="/soloEat/result" element={<ChoiceResult />} />
        <Route path="/select/:problem" element={<MbtiSelectPage />} />
        <Route path="/soloEat/:problem" element={<FoodSelectPage />} />
        <Route path="/method" element={<MethodChoice />} />
        <Route path="/together/partyChoice" element={<PartyChoice />} />
        <Route path="/together/searchParty" element={<SearchParty />} />
        <Route path="/together/searchSuggested" element={<SearchSuggested />} />
        <Route path="/together/joinParty" element={<JoinParty />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
