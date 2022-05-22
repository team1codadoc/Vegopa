import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import heehee from "../img/charHeeHee.png";

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
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
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

function Together() {
  return (
    <Wrapper>
      <Container>
        <Link to="#">
          <Button>
            <Title>내 파티</Title>
            <Arrow>
              <FaAngleRight />
            </Arrow>
          </Button>
        </Link>
        <Img src={heehee} />
        <Link to="/together/searchParty">
          <Button>
            <Title></Title>
            <Arrow>
              <FaAngleRight />
            </Arrow>
            <Title>파티 찾기</Title>
          </Button>
        </Link>
      </Container>
    </Wrapper>
  );
}

export default Together;
