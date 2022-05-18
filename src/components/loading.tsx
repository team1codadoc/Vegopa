import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <LoadingContainer>
        <LoadingIcon></LoadingIcon>
        <LoadingText>loading...</LoadingText>
      </LoadingContainer>
    </Wrapper>
  );
};

const rotateLoading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoadingIcon = styled.div`
  height: 100px;
  position: relative;
  width: 100px;
  border-radius: 100%;

  border: 2px solid transparent;
  border-color: transparent black transparent black;
  animation: ${rotateLoading} 1.5s linear 0s infinite normal;
  transform-origin: 50% 50%;
`;

const LoadingContainer = styled.div`
  height: 100px;
  position: relative;
  width: 100px;
  border-radius: 100%;
  margin: 40px auto;
`;
const LoadingText = styled.div`
  color: black;
  font-size: 13px;
  font-weight: bold;
  margin-top: 43px;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 0;
  width: 100px;
`;

export default Loading;
