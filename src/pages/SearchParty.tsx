import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { MapTogether } from "../components/mapTogether";
import { FaSearch, FaAngleLeft } from "react-icons/fa";

const SearchParty = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <GoBack>
          <FaAngleLeft onClick={() => navigate(-1)} />
        </GoBack>
        <Home>
          <Img src={"/assets/home_icon.png"} />
        </Home>
        <SearchNearBy>
          <Icon>
            <FaSearch />
          </Icon>
          <Input name="taste" type="text" placeholder="좋아하는 음식을 입력하세요" />
        </SearchNearBy>
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Container = styled.div`
  max-width: 621px;
  margin: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

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

const SearchNearBy = styled.form`
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 60px;
  right: 0;
  left: 0;
  margin: auto;
`;
const Input = styled.input`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.LIGHT_GREY};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
  padding: 10px 40px;
  position: absolute;
  z-index: 100;
`;
const Icon = styled.div`
  width: 20px;
  height: 20px;
  z-index: 101;
  position: absolute;
  left: 15px;
`;
const Home = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
`;
const GoBack = styled.div`
  position: fixed;
  top: 15px;
  left: 15px;
  font-size: 1.8em;
`;
