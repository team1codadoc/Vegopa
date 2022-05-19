import React from "react";
import styled from "styled-components";

import { GiPartyPopper } from "react-icons/gi";
import { RiSearchEyeLine } from "react-icons/ri";

import { Map } from "../../components/mapTogether";
import { HeaderComponent } from "../../components/Header";

const Wrapper = styled.section`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 394px;
  height: 660px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const MapContainer = styled.div`
  width: inherit;
  height: 80%;
  position: absolute;
  top: 170px;
`;

const NavBar = styled.div`
  width: inherit;
  height: 120px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavIconBox = styled.div`
  width: 80px;
  height: 70px;
  border-radius: 15px;
  margin-right: 10px;
  background: black;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  color: white;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 58px;
  padding-left: 25px;
  text-decoration: underline;
`;

const SearchParty = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderComponent />
        <Title> Vegopa </Title>
        <MapContainer>
          <Map />
        </MapContainer>
        <NavBar>
          <a href="/together/search">
            <NavIconBox><GiPartyPopper /></NavIconBox>
          </a>
          <a href="/together/startGroup">
            <NavIconBox><RiSearchEyeLine /></NavIconBox>
          </a>
        </NavBar>
      </Container>
    </Wrapper>
  );
};

export default SearchParty;
