import React from "react";
import styled from "styled-components";

interface props {
  text: string;
  setSelectedQuestion: (id: number) => void;
  selected: boolean;
  id: number;
}

const FoodSelectButton = ({ text, setSelectedQuestion, selected, id }: props) => {
  const selectClickHandler = () => {
    setSelectedQuestion(id);
  };
  return (
    <SelectButton selected={selected} onClick={selectClickHandler}>
      {text}
    </SelectButton>
  );
};

export default FoodSelectButton;

const SelectButton = styled.button<{ selected: boolean }>`
  width: 100%;
  padding: 16px 0;
  border: 3px solid ${({ theme }) => theme.colors.LIGHT_GREEN};
  background-color: ${({ theme, selected }) => (selected ? theme.colors.GREY_COLOR : theme.colors.WHITE_COLOR)};
  border-radius: 10px;
  font-size: 20px;
  margin-bottom: 24px;
  transition: all 300ms ease-in-out;
`;
