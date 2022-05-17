import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../../components/Spinner";
import colors from "../../theme/colors";

export const MbtiLoading = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/select/result"), 2000);
  }, []);

  const spinnerColor = colors.BLACK_COLOR;
  const spinnerInnerColor = colors.GREY_COLOR;
  return (
    <MbtiLoadingWarpper>
      <Container>
        <h1 className="ir">결과 분석 페이지</h1>
        <LoadingTitle>결과 분석 중입니다.</LoadingTitle>
        <Spinner color={spinnerColor} innerColor={spinnerInnerColor} />
      </Container>
    </MbtiLoadingWarpper>
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

const MbtiLoadingWarpper = styled.div`
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
