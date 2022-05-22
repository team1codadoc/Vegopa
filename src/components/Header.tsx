import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";

import { FaAngleLeft, FaHome, FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const Header = styled.div`
  width: 394px;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.WHITE_COLOR};
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const HeaderColumn = styled.div`
  width: 33%;
  z-index: 2;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-child {
    justify-content: flex-start;
    padding-left: 20px;
  }
  &:last-child {
    justify-content: flex-end;
    padding-right: 20px;
    position: relative;
  }
`;

const Title = styled.div`
  font-weight: bold;
`;

const SideBarContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.WHITE_COLOR};
  color: ${({ theme }) => theme.colors.DARK_GRAY};
  width: 30%;
  position: absolute;
  right: 0;
  top: 35px;
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
  color: ${({ theme }) => theme.colors.DARK_GRAY};
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
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
];

export const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  return (
    <Header>
      <HeaderColumn>
        <FaAngleLeft onClick={() => navigate(-1)} />
      </HeaderColumn>
      <HeaderColumn>
        <Title>{location.pathname.split("/")[2] ? location.pathname.split("/")[2] : "Title"}</Title>
      </HeaderColumn>
      <HeaderColumn>
        <FaBars onClick={toggle} />
        <SideBarContainer animate={{ height: isOpen ? "100vh" : "0vh" }}>
          {isOpen && (
            <>
              <TopSection>
                <UserName>User Name </UserName>
              </TopSection>
              <Search>
                <BiSearch />
                <input type="text" placeholder="Search" style={{ border: "none", width: "160px" }} />
              </Search>
              <Section>
                {routes.map((route) => (
                  <NavLink to={route.path} key={route.name}>
                    <div>{route.icon}</div>
                    <div>{route.name}</div>
                  </NavLink>
                ))}
              </Section>
            </>
          )}
        </SideBarContainer>
      </HeaderColumn>
    </Header>
  );
};
