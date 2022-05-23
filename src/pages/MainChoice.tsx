import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { tokenStorage } from "../store/token";

const MainChoice = () => {
  const navigate = useNavigate();
  const token = tokenStorage.getAuthToken();
  return (
    <Wrapper>
      <Container>
        <GoBack>
          <FaAngleLeft onClick={() => navigate(-1)} />
        </GoBack>
        <Button>
          <Link to="/method">
            <Arrow>
              <Title>혼밥</Title>
              <FaAngleRight />
            </Arrow>
            <Text>혼자 드시는 </Text>
            <Text>당신을 위해!</Text>
          </Link>
        </Button>
        <Img src={"/assets/charEating.png"} />
        <Button>
          <Link to={token ? "/together" : "/together/login"}>
            <Arrow>
              <Title>같이</Title>
              <FaAngleRight />
            </Arrow>
            <Text>함께 먹을 친구</Text>
            <Text>구하러 가기!</Text>
          </Link>
        </Button>
      </Container>
    </Wrapper>
  );
};

export default MainChoice;

const Wrapper = styled.div`
  height: 100%;
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
  background-color: ${({ theme }) => theme.colors.LIGHT_GREEN};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  color: rgba(0, 0, 0, 0.3);
  line-height: 23px;
`;
const Img = styled.img``;
const Arrow = styled.div`
  width: 100%;
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;
const GoBack = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 1.8em;
`;
