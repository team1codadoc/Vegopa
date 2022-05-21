import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MbtiContext } from "../../store/MbtiContext";

interface props {
  text: string;
  nextPage: number;
  endPage: number;
  id?: string;
}

const MbtiSelectButton = ({ text, nextPage, id, endPage }: props) => {
  const navigate = useNavigate();
  const context = useContext(MbtiContext);
  const selectClickHandler = () => {
    context.setAnswer(id, nextPage - 2);
    if (nextPage === endPage) {
      navigate("/select/loading");
    } else {
      setTimeout(() => navigate(`/select/${nextPage}`), 300);
    }
  };
  return <SelectButton onClick={selectClickHandler}>{text}</SelectButton>;
};

export default MbtiSelectButton;

const SelectButton = styled.button`
  width: 100%;
  padding: 16px 0;
  border: 3px solid ${({ theme }) => theme.colors.GREY_COLOR};
  border-radius: 10px;
  font-size: 20px;
  margin-bottom: 77px;
  transition: all 300ms ease-in-out;
  &:focus {
    background-color: ${({ theme }) => theme.colors.GREY_COLOR};
  }
`;
