import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import FoodSelectButton from "../components/foodSelectPage/FoodSelectButton";
import Navbar from "../components/navbar/Navbar";

const foodQuestion = [
  {
    question: "어떤 음식을 더 좋아하세요 최대 4가지를 선택해주세요",
    answerNumber: 4,
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
  {
    question: "어떤 음식을 먹고 싶으신가요? 최대 2가지를 선택해주세요",
    answerNumber: 2,
    selects: [
      { text: "한식", id: 1, selected: false },
      { text: "중식", id: 2, selected: false },
      { text: "일식", id: 3, selected: false },
      { text: "패스트 푸드", id: 4, selected: false },
      { text: "야식", id: 5, selected: false },
      { text: "분식", id: 6, selected: false },
    ],
  },
];

const FoodSelectPage = () => {
  const location = useLocation();
  const navigator = useNavigate();
  const questionNum = +location.pathname.split("/")[2] - 1;
  const { answerNumber, selects } = foodQuestion[questionNum];
  const [presentQuestion, setQuestionNum] = useState(questionNum);
  const [question, setQuestion] = useState(selects);

  useEffect(() => {
    setQuestion(selects);
    setQuestionNum(questionNum + 1);
  }, [location]);

  const setSelectedQuestion = (number: number) => {
    const { id, text, selected } = question[number - 1];
    if (question.filter(({ selected }) => selected).length < answerNumber && !selected) {
      setQuestion([...question.slice(0, number - 1), { id, text, selected: !selected }, ...question.slice(number)]);
    }

    if (selected)
      setQuestion([...question.slice(0, number - 1), { id, text, selected: !selected }, ...question.slice(number)]);
  };
  const NextButtonHandler = () => {
    if (questionNum + 1 === foodQuestion.length) {
      navigator("/soloEat/result");
    } else {
      navigator(`/soloEat/${questionNum + 2}`);
    }
  };
  return (
    <SelectPageWrapper>
      <FoodSelectMain>
        <Navbar title="취향 분석" />
        <ProgressBar>
          <span>{questionNum + 1}/2</span>
          <Bar>
            <ProgressedBar presentWidth={(presentQuestion / 2) * 100} />
          </Bar>
        </ProgressBar>
        <QuestionText>{foodQuestion[questionNum].question}</QuestionText>
        <SelectWrapper>
          {question.map(({ text, id, selected }) => (
            <FoodSelectButton key={id} {...{ selected, text, id, setSelectedQuestion }} />
          ))}
        </SelectWrapper>
      </FoodSelectMain>
      <NextButton onClick={NextButtonHandler}>다음</NextButton>
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
  overflow-y: scroll;
  height: 60%;
`;

const QuestionText = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 48px;
  line-height: 24px;
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
  transition: 300ms;
`;
