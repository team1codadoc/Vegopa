import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import { FaAngleLeft, FaHome, FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const Header = styled.div`
  width: inherit;
  height: 100px;
  position: absolute;
  top: -10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 10px 30px 10px rgba(255,255,255,0.8);
`;

const HeaderColumn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  &:last-child {
    justify-content: flex-start;
  }
`;

const IconBox = styled.div`
  position: absolute;
  top: 15px;
  width: 45px;
  height: 45px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  cursor: pointer;
  &:first-child {
    left: 15px;
  }
  &:last-child {
    right: 15px;
  }
`;

const MainContainer = styled(motion.div)`
  background-color: ${({theme}) => theme.colors.LIGHT_GREY};
  color: ${({ theme }) => theme.colors.DARK_GRAY};
  width: 40vw;
  height: 0;
  position: absolute;
  right: 0;
  top: 90px;
  z-index: 10;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
`;

const UserName = styled.div`
    font-size: 18px;
    line-height: 0;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  height: 30px;
  padding: 10px;
`;

const Section = styled.section`
  display: flex;
  color: ${({theme})=> theme.colors.DARK_GRAY};
  gap: 10px;
  padding: 5px;
  transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  &:hover {
    background-color: gray;
    transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }
`;

const routes = [
  {
    path:"/",
    name: "Home",
    icon: <FaHome />,
  }
];

export const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Header>
      <HeaderColumn>
        <a href="/"><IconBox><FaAngleLeft /></IconBox></a>
        <IconBox><FaBars onClick={toggle} /></IconBox>
      </HeaderColumn>
      <MainContainer animate={{height: isOpen ? "80vh" : "0vh" }}>
        { isOpen && (
          <>
            <TopSection>
              <UserName>User Name </UserName>
            </TopSection>
            <Search>
              <BiSearch />
              <input type="text" placeholder="Search" style={{border:"none", width:"160px"}} />
            </Search>
            <Section>
              {routes.map((route) => (
                <NavLink to={route.path} key={route.name}>
                  <div>{route.icon}</div>
                  <div>{route.name}</div>
                </NavLink>
              ))}
            </Section>
          </>)
        }

      </MainContainer>
    </Header>
  );
};
