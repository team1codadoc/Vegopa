import React from "react";
import styled from "styled-components";
import { ReactComponent as Icon } from "../../../icon/chevron-left.svg";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <BackButton>
        <Icon />
      </BackButton>
      <div>
        <Title>취향 분석</Title>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  text-align: center;
`;

const Title = styled.span`
  font-size: 20px;
`;

const BackButton = styled.button`
  position: absolute;
  left: 8px;
  cursor: pointer;
`;
