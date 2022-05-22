import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

function Together() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <GoBack>
          <FaAngleLeft onClick={() => navigate(-1)} />
        </GoBack>
        <Link to="#">
          <Button>
            <Title>내 파티</Title>
            <Arrow>
              <FaAngleRight />
            </Arrow>
          </Button>
        </Link>
        <Img src={"/assets/charHeeHee.png"} />
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
const GoBack = styled.div`
  position: fixed;
  top: 15px;
  left: 15px;
  font-size: 1.8em;
`;
