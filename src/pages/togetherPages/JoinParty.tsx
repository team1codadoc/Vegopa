import { filterProps } from "framer-motion";
import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

import partyImg from "../../img/party.png";
import { getPartyInfo } from "../../queryAPI";
import Navbar from "../foodSelectPage/navbar/Navbar";

type Party = {
  title: string;
  owner: number;
  total: number;
  taste: string[];
  participants: number[];
  date: string;
  address: [];
  picture: string;
  party_status: boolean;
  party_id: number;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 394px;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  position: fixed;
  top: 55px;
  overflow-y: scroll;
`;

const Column = styled.div`
  width: 100%;
  max-height: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  padding: 0 25px;
  &:first-child {
    position: relative;
    padding: 0;
  }
  &:nth-child(2) {
    padding-left: 25px;
  }
  &:nth-child(3) {
    justify-content: space-between;
  }
  &:last-child {
    flex-direction: column;
  }
`;

const Text = styled.span`
  position: absolute;
  top: 10px;
  left: 25px;
  color: ${({ theme }) => theme.colors.LIGHT_GREEN};
  font-weight: bold;
  z-index: 1;
`;

const ImgBox = styled.img.attrs({ src: partyImg })`
  width: 100%;
  height: 100%;
`;

const Tags = styled.div`
  display: flex;
`;

const Tag = styled.div`
  height: 30px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.PINK};
  color: ${(props) => props.theme.colors.WHITE_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  margin: 0 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
`;

const Title = styled.span`
  font-size: 1.5em;
  font-weight: bold;
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

const NavBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE_COLOR};
  z-index: 10;
`;

function JoinParty() {
  return (
    <Wrapper>
      <Container>
        <Column>
          <Text>모집중</Text>
          <ImgBox></ImgBox>
        </Column>
        <Column>
          <Title>국밥 먹으러 갈 사람~</Title>
        </Column>
        <Column>
          <span> 파티장 닉네임 </span>
          <span>4/8</span>
        </Column>
        <Column>
          <Tags>
            <Tag>국밥</Tag>
            <Tag>한식</Tag>
            <Tag>국물</Tag>
          </Tags>
        </Column>
        <Column>
          <p>모임장소:</p>
        </Column>
        <Column>
          <p>모임시간:</p>
        </Column>
        <Column>
          <p>
            참석자: <hr />
            참석자1 <hr />
            참석자2 <hr />
            참석자3 <hr />
            참석자4 <hr />
            참석자5 <hr />
            참석자6 <hr />
          </p>
        </Column>
        <NavBar>
          <Button>파티 참가하기</Button>
        </NavBar>
      </Container>
    </Wrapper>
  );
}

export default JoinParty;
