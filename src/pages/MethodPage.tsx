import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import heehee from "../img/charHeeHee.png";

const Wrapper = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Container = styled.div`
  width: 394px;
  height: 670px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  width: 230px;
  height: 140px;
  border-radius: 10px;
  background: #ead1d1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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
  padding-bottom: 10px;
`;

const Text = styled.p`
  font-size: 1em;
  color: rgba(0, 0, 0, 0.3);
  line-height: 23px;
`;

const Img = styled.img``;

const Arrow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;
  font-size: x-large;
  position: absolute;
`;

const MethodChoice = () => {
  return (
    <Wrapper>
      <Container>
        <Link to="/soloEat/result">
          <Button>
            <Title>골라줘!</Title>
            <Arrow>
              <FaAngleRight />
            </Arrow>
            <Text>그냥 랜덤으로 추천해줘 </Text>
          </Button>
        </Link>
        <Img src={heehee} />
        <Link to="/soloEat/1">
          <Button>
            <Title>고를래~</Title>
            <Arrow>
              <FaAngleRight />
            </Arrow>
            <Text>내 취향대로 추천 받을래</Text>
          </Button>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default MethodChoice;
