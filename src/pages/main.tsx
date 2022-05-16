import React from "react";
import styled from "styled-components";
import Logo from "/assets/vegopa.png";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0 60px 0;
`;

const Header = styled.div`
  align-self: end;
  padding: 25px 10px;
  h2 {
    font-size: 1.75rem;
    font-weight: 500;
  }

  .roulette {
    margin-top: 13px;
    font-size: 12px;
    font-weight: 400;
  }
`;

const MenuRecommendBtn = styled.button`
  width: 175px;
  height: 48px;
  border-radius: 20px;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.DARK_GRAY};
`;

const Bottom = styled.div`
  position: fixed;
  bottom: 15px;
  left: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MbTI = styled.button`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const RouletteLink = styled(Link)`
  color: ${({ theme }) => theme.colors.BLACK_COLOR};
  span {
    font-size: 12px;
    margin-top: 10px;
    display: block;
  }
`;

const Main = () => {
  return (
    <Container>
      <Header>
        <RouletteLink to="/soloEat/result">
          <h2>귀찮아...</h2>
          <span>룰렛으로 추천받기</span>
        </RouletteLink>
      </Header>
      <LogoWrapper>
        <img src={Logo} alt="logo" />
      </LogoWrapper>
      <Link to="/mainChoice">
        <MenuRecommendBtn type="button">메뉴 추천받기</MenuRecommendBtn>
      </Link>
      <Bottom>
        <StyledLink to="/select/1">
          <MbTI>
            <p>밥먹기 전에 심심하면</p>
            <p>음BTI 해볼래요?</p>
          </MbTI>
          <FaAngleRight size={23} />
        </StyledLink>
      </Bottom>
    </Container>
  );
};

export default Main;
