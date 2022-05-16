import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import MbtiSelectButton from "./mbtiSelectButton";
import Navbar from "./navbar/Navbar";

const mbtiQuestion = [
  {
    selects: [
      { text: "물렁 복숭아", id: "1" },
      { text: "딱딱한 복숭아", id: "2" },
    ],
  },
  {
    selects: [
      { text: "민트초코", id: "3" },
      { text: "반민트초코", id: "4" },
    ],
  },
  {
    selects: [
      { text: "탕수육 부먹", id: "5" },
      { text: "탕수육 찍먹", id: "6" },
    ],
  },
  {
    selects: [
      { text: "물냉면", id: "7" },
      { text: "비빔냉면", id: "8" },
    ],
  },
];

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
