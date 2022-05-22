import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { MapTogether } from "../components/mapTogether";
import { HeaderComponent } from "../components/Header";

const MapContainer = styled.div`
  width: inherit;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 0;
`;

const NavBar = styled.div`
  width: inherit;
  height: 120px;
  position: absolute;
  bottom: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Button = styled.button`
  width: 60%;
  height: 40px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.LIGHT_GREEN};
  box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SearchNearBy = styled.form``;

const SearchParty = () => {
  return (
    <>
      <HeaderComponent />
      <SearchNearBy></SearchNearBy>
      <MapContainer>
        <MapTogether />
      </MapContainer>
      <NavBar>
        <Button>
          <Link to="/together/joinParty">내 파티 열기</Link>{" "}
        </Button>
      </NavBar>
    </>
  );
};

export default SearchParty;
