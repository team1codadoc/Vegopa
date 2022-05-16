import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import FoodSelectButton from "./foodSelectButton";
import MbtiSelectButton from "./foodSelectButton";
import Navbar from "./navbar/Navbar";

const foodQuestion = [
  {
    question: "어떤 음식을 더 좋아하세요 최대 4가지를 선택해주세요",
    selects: [
      { text: "연어회", id: 1, selected: false },
      { text: "삼겹살", id: 2, selected: false },
      { text: "라면", id: 3, selected: false },
      { text: "짜장면", id: 4, selected: false },
      { text: "도넛", id: 5, selected: false },
      { text: "감자탕", id: 6, selected: false },
      { text: "엽기떡볶이", id: 7, selected: false },
      { text: "짬뽕", id: 8, selected: false },
      { text: "일본식 라멘", id: 9, selected: false },
      { text: "족발", id: 10, selected: false },
    ],
  },
];

const FoodSelectPage = () => {
  const location = useLocation();
  const presentQuestion = +location.pathname.split("/")[2];
  const [question, setQuestion] = useState(foodQuestion[0].selects);
  const setSelectedQuestion = (number: number) => {
    const { id, text, selected } = question[number - 1];
    if (question.filter(({ selected }) => selected).length < 4 && !selected) {
      setQuestion([...question.slice(0, number - 1), { id, text, selected: !selected }, ...question.slice(number)]);
    }

    if (selected)
      setQuestion([...question.slice(0, number - 1), { id, text, selected: !selected }, ...question.slice(number)]);
  };

  return (
    <SelectPageWrapper>
      <FoodSelectMain>
        <Navbar />
        <ProgressBar>
          <span>{presentQuestion}/2</span>
          <Bar>
            <ProgressedBar presentWidth={(presentQuestion / 2) * 100} />
          </Bar>
        </ProgressBar>
        <QuestionText>{foodQuestion[0].question}</QuestionText>
        <SelectWrapper>
          {question.map(({ text, id, selected }) => (
            <FoodSelectButton key={id} {...{ selected, text, id, setSelectedQuestion }} />
          ))}
        </SelectWrapper>
      </FoodSelectMain>
      <NextButton>다음</NextButton>
    </SelectPageWrapper>
  );
};

export default FoodSelectPage;
const FoodSelectMain = styled.div`
  height: 80%;
  width: 100%;
`;

const NextButton = styled.button`
  background: #f1f1f1;
  border-radius: 10px;
  padding: 18px 0;
  width: 100%;
  margin: 24px 0;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 60%;
`;

const QuestionText = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 48px;
`;

const SelectPageWrapper = styled.div`
  padding: 0 12px;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
