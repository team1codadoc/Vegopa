import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Icon } from "../../icon/chevron-left.svg";
type props = {
  title: string;
};

const Navbar = ({ title }: props) => {
  const navigate = useNavigate();
  return (
    <NavbarWrapper>
      <BackButton onClick={() => navigate(-1)}>
        <Icon />
      </BackButton>
      <div>
        <Title>{title}</Title>
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
