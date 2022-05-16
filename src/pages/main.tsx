import React from "react";
import styled from "styled-components";

import { FaAngleRight } from "react-icons/fa";
import eating from "../img/charEating.png";

const Wrapper = styled.section`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div `
  width: 394px;
  height: 670px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  width: 65%;
  height: 140px;
  border-radius: 10px;
  background: #F1F1F1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:first-child {
    margin-top: 40px;
  }
  &:last-child {
    margin-bottom: 40px;
  }
`;

const Title = styled.div`
  font-size: 2.5em;
  font-weight: bold;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1em;
  coloR: rgba(0,0,0,0.3);
  line-height: 23px;
`;

const Img = styled.img`
`;

const Arrow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 70px;
  font-size: x-large;
`;

const MainChoice = () => {
  return (
    <Wrapper>
      <Container>
        <Button>
          <a href="/solo">
            <Title>혼밥</Title>
            <Arrow><FaAngleRight /></Arrow>
            <Text>혼자 드시는 </Text>
            <Text>당신을 위해!</Text>
          </a>
        </Button>
        <Img src={eating} />
        <Button>
          <a href="/together">
            <Title>같이</Title>
            <Arrow><FaAngleRight /></Arrow>
            <Text>함께 먹을 친구</Text>
            <Text>구하러 가기!</Text>
          </a>
        </Button>
      </Container>
    </Wrapper>
  );
};

export default MainChoice;
