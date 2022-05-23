import React from "react";
import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import PartyInfo from "../components/PartyInfo";

function PartyDetailPage() {
  return (
    <PartyDetailWrapper>
      <Navbar title="파티 상세페이지" />
      <PartyInfo />
      <PartyButtonWrapper>
        <button>파티 참가하기</button>
      </PartyButtonWrapper>
    </PartyDetailWrapper>
  );
}

export default PartyDetailPage;
const PartyButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  button {
    padding: 12px 24px;
    border-radius: 10px;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.LIGHT_GREEN};
    font-size: 18px;
  }
`;

const PartyDetailWrapper = styled.div`
  background-color: #fff;
  max-width: 575px;
  margin: auto;
  height: 100vh;
  position: relative;
`;
