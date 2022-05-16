import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const MbtiLoading = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/select/result"), 2000);
  }, []);
  return (
    <MbtiLoadingWarpper>
      <div>결과 분석 중입니다.</div>
    </MbtiLoadingWarpper>
  );
};

const MbtiLoadingWarpper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    font-size: 30px;
    font-family: "TmoneyRoundWindExtraBold";
  }
`;
