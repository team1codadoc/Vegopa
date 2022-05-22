import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { MapTogether } from "../components/mapTogether";
import { HeaderComponent } from "../components/Header";
import { FaSearch } from "react-icons/fa";

const SearchParty = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderComponent />
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

const Wrapper = styled.section`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 394px;
  height: 670px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
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
  cursor: pointer;
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
