import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaAngleLeft } from "react-icons/fa";

import { MapTogether } from "../components/mapTogether";
import { Input } from "../components/Input";

const SearchParty = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Header>
          <GoBack>
            <FaAngleLeft onClick={() => navigate(-1)} />
          </GoBack>
          <a href="/">
            <Home>
              <Img src={"/assets/home_icon.png"} />
            </Home>
          </a>
        </Header>
        <Input />
        <MapContainer>
          <MapTogether />
        </MapContainer>
        <NavBar>
          <Link to="/together/joinParty">
            <Button>파티 생성하기</Button>
          </Link>{" "}
        </NavBar>
      </Container>
    </Wrapper>
  );
};

export default SearchParty;

const Wrapper = styled.div`
  background: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  max-width: 621px;
  width: 250px;
  height: 390px;
  margin: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Header = styled.div`
  width: inherit;
  height: 35px;
`;
const MapContainer = styled.div`
  width: 100%;
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
  width: 230px;
  height: 50px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.WHITE_COLOR};
  background: ${({ theme }) => theme.colors.LIGHT_GREEN};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  font-size: 1.2em;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.LIGHT_GREEN};
    background-color: ${({ theme }) => theme.colors.WHITE_COLOR};
    color: ${({ theme }) => theme.colors.LIGHT_GREEN};
    box-shadow: none;
  }
`;

const Home = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
  z-index: 1;
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
  z-index: 20;
`;
const GoBack = styled.div`
  position: fixed;
  top: 15px;
  left: 15px;
  font-size: 1.8em;
  z-index: 20;
`;
