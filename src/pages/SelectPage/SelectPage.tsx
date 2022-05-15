import React from "react";
import styled from "styled-components";
import { ReactComponent as Icon } from "../../icon/chevron-left.svg";

const SelectPage = () => {
  return (
    <SelectPageWrapper>
      <Navbar>
        <BackButton>
          <Icon />
        </BackButton>
        <div>
          <Title>음식 mbti</Title>
        </div>
      </Navbar>
      <ProgressBar>
        <span>2/4</span>
        <Bar>
          <ProgressedBar presentWidth={(2 / 4) * 100} />
        </Bar>
      </ProgressBar>
      <QuestionText>둘중에 마음에 드는 하나를 골라주세요!</QuestionText>
      <SelectWrapper>
        <SelectButton onClick={() => console.log("물렁복숭아")}>물렁 복숭아</SelectButton>
        <SelectButton>딱딱한 복숭아</SelectButton>
      </SelectWrapper>
    </SelectPageWrapper>
  );
};

export default SelectPage;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectButton = styled.button`
  width: 100%;
  /* background: #b6aeae; */
  padding: 16px 0;
  border: 3px solid ${({ theme }) => theme.colors.GREY_COLOR};
  border-radius: 10px;
  font-size: 20px;
  margin-bottom: 77px;
  transition: all 300ms ease-in-out;

  &:focus {
    background: ${({ theme }) => theme.colors.GREY_COLOR};
  }
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

const BackButton = styled.button`
  position: absolute;
  left: 8px;
  cursor: pointer;
`;

const Title = styled.span`
  font-size: 20px;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  text-align: center;
`;
