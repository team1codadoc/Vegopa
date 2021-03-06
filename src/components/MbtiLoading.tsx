import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Spinner from "./Spinner";
import colors from "../theme/colors";

type props = {
  title: string;
  path: string;
  subtitle: string;
};

const MbtiLoading = ({ title, path, subtitle }: props) => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate(path), 2000);
  }, []);

  const spinnerColor = colors.BLACK_COLOR;
  const spinnerInnerColor = colors.GREY_COLOR;
  return (
    <MbtiLoadingWrapper>
      <Container>
        <h1 className="ir">{title}</h1>
        <LoadingTitle>{subtitle}</LoadingTitle>
        <Spinner color={spinnerColor} innerColor={spinnerInnerColor} />
      </Container>
    </MbtiLoadingWrapper>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoadingTitle = styled.h2`
  margin-bottom: 2em;
  font-size: 30px;
  font-family: "TmoneyRoundWindExtraBold";
`;

const MbtiLoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .ir {
    overflow: hidden;
    position: absolute;
    width: 0;
    height: 0;
    line-height: 0;
    text-indent: -9999px;
  }
`;

export default MbtiLoading;
