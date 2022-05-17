import React from "react";
import styled from "styled-components";

import { AiOutlineSend, AiFillSignal } from "react-icons/ai";
import { BsBatteryHalf } from "react-icons/bs";
import { FaAngleLeft, FaBars } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { RiSearchEyeLine } from "react-icons/ri";

import { Map } from "../components/mapTogether";

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

const StatusBar = styled.div`
  position: absolute;
  top: 0;
  width: inherit;
  height: 25px;
  border-radius: 5px;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 3px;
`;

const StatusBarColumn = styled.div`
  width: 33%;
  &:first-child {
    margin: 0 10px;
  };
  &:nth-child(2) {
    display: flex;
    justify-content: center;
  };
  &:last-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const HeaderLayer = styled.div`
  width: inherit;
  height: 200px;
  background: linear-gradient(rgba(241,245,39,0.8), rgba(158,222,47, 0.1));
  position: relative;
  top: 25px;
`;

const Header = styled.div`
  width: inherit;
  height: 200px;
  position: absolute;
  top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 10px 30px 10px rgba(255,255,255,0.8);
  background: linear-gradient(to bottom,rgba(251,233,159,0.2) 30%, rgba(255,170,232, 0.8));
`;

const HeaderColumn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  &:last-child {
    justify-content: flex-start;
  }
`;

const Title = styled.h1`
  font-size: 58px;
  padding-left: 25px;
  text-decoration: underline;
`;

const IconBox = styled.div`
  position: absolute;
  top: 15px;
  width: 45px;
  height: 45px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  cursor: pointer;
  &:first-child {
    left: 15px;
  }
  &:last-child {
    right: 15px;
  }
`;

const MapContainer = styled.div`
  width: inherit;
  height: 80%;
`;

const NavBar = styled.div`
  width: inherit;
  height: 120px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom,rgba(251,233,159,0.2), rgba(255,170,232, 0.9));
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

const EatTogether = () => {
  return (
    <Wrapper>
      <Container>
        <StatusBar>
          <StatusBarColumn>9:41 <AiOutlineSend /></StatusBarColumn>
          <StatusBarColumn></StatusBarColumn>
          <StatusBarColumn><AiFillSignal />50%<BsBatteryHalf /></StatusBarColumn>
        </StatusBar>
        <HeaderLayer />
        <Header>
          <a href="/">
            <HeaderColumn><IconBox><FaAngleLeft /></IconBox><IconBox><FaBars /></IconBox></HeaderColumn>
          </a>
          <HeaderColumn><Title>Vegopa</Title></HeaderColumn>
        </Header>
        <MapContainer>
          <Map />
        </MapContainer>
        <NavBar>
          {/* 내가 팟 열기 버튼*/}
          <NavIconBox><GiPartyPopper /></NavIconBox>
          {/* 같은 음식 먹고 싶은 사람 찾기 버튼*/}
          <NavIconBox><RiSearchEyeLine /></NavIconBox>
        </NavBar>
      </Container>
    </Wrapper>
  );
};

export default EatTogether;
