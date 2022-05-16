import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface props {
  text: string;
  nextPage: number;
  endPage: number;
  id?: string;
}

const MbtiSelectButton = ({ text, nextPage, id, endPage }: props) => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);

  const selectClickHandler = () => {
    if (nextPage === endPage) {
      navigate("/select/result");
    } else {
      navigate(`/select/${nextPage}`);
    }
  };
  return (
    <SelectButton click={click} onClick={selectClickHandler}>
      {text}
    </SelectButton>
  );
};

export default MbtiSelectButton;

const SelectButton = styled.button<{ click: boolean }>`
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  width: 100%;
  padding: 16px 0;
  border: 3px solid ${({ theme }) => theme.colors.GREY_COLOR};
  border-radius: 10px;
  font-size: 20px;
  margin-bottom: 77px;
  transition: all 300ms ease-in-out;

  background: ${({ theme, click }) => (click ? theme.colors.GREY_COLOR : theme.colors.WHITE_COLOR)};
`;
