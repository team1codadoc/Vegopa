import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useRecoilState } from "recoil";

export const Input = () => {
  const [keyword, setKeyword] = useState("");
  const tasteInput = useRef<HTMLInputElement>(null);
  const onChange = (e) => {
    const { value } = e.target;
    setKeyword(value);
  };

  const onReset = () => {
    setKeyword("");
    tasteInput.current.focus();
  };
  return (
    <SearchBar>
      <Icon>
        <FaSearch />
      </Icon>
      <StyledInput
        ref={tasteInput}
        onChange={onChange}
        value={keyword}
        name="taste"
        type="keyword"
        placeholder="좋아하는 음식을 입력하세요"
      />
    </SearchBar>
  );
};

const SearchBar = styled.form`
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 60px;
  right: 0;
  left: 0;
  margin: auto;
`;
const StyledInput = styled.input`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.LIGHT_GREY};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
  padding: 10px 40px;
  position: absolute;
  z-index: 1;
`;
const Icon = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 15px;
  z-index: 2;
`;
