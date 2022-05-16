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

  const selectClickHandler = () => {
    if (nextPage === endPage) {
      navigate("/select/result");
    } else {
      navigate(`/select/${nextPage}`);
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
`;
