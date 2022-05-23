import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { mbtiQuestion } from "../Constant/constant";
import MbtiSelectButton from "../components/mbtiSelectPage/MbtiSelectButton";
import Navbar from "../components/navbar/Navbar";

const MbtiSelectPage = () => {
  const location = useLocation();
  const question = +location.pathname.split("/")[2] - 1;
  const [presentQuestion, setQuestion] = useState(question);

  useEffect(() => {
    setQuestion(question + 1);
  }, [location]);

  return (
    <SelectPageWrapper>
      <Navbar title="음식 mbti" />
      <ProgressBar>
        <span>{presentQuestion}/4</span>
        <Bar>
          <ProgressedBar presentWidth={(presentQuestion / 4) * 100} />
        </Bar>
      </ProgressBar>
      <QuestionText>둘 중에 마음에 드는 하나를 골라주세요!</QuestionText>
      <SelectWrapper>
        {mbtiQuestion[question].selects.map(({ text, id }) => (
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
  height: 100%;
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
  background-color: ${({ theme }) => theme.colors.LIGHT_GREEN};
  transition: 300ms;
`;
