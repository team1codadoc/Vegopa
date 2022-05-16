import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { mbtiQuestion } from "../../Constant/constant";
import MbtiSelectButton from "./mbtiSelectButton";
import Navbar from "./navbar/Navbar";

const MbtiSelectPage = () => {
  const location = useLocation();
  const presentQuestion = +location.pathname.split("/")[2];

  return (
    <SelectPageWrapper>
      <Navbar />
      <ProgressBar>
        <span>{presentQuestion}/4</span>
        <Bar>
          <ProgressedBar presentWidth={(presentQuestion / 4) * 100} />
        </Bar>
      </ProgressBar>
      <QuestionText>둘중에 마음에 드는 하나를 골라주세요!</QuestionText>
      <SelectWrapper>
        {mbtiQuestion[presentQuestion - 1].selects.map(({ text, id }) => (
          <MbtiSelectButton key={id} endPage={5} nextPage={presentQuestion + 1} {...{ id, text }} />
        ))}
      </SelectWrapper>
    </SelectPageWrapper>
  );
};

export default MbtiSelectPage;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionText = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 48px;
`;

const SelectPageWrapper = styled.div`
  padding: 0 12px;
`;

const ProgressBar = styled.div`
  width: 100%;
  span {
    display: inline-block;
    margin-bottom: 4px;
  }
`;

const Bar = styled.div`
  width: 100%;
  height: 10px;
  border: 1px solid black;
`;

const ProgressedBar = styled.div<{ presentWidth: number }>`
  width: ${({ presentWidth }) => `${presentWidth}%`};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.GREY_COLOR};
`;
