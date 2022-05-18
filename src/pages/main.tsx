import React from "react";
import styled from "styled-components";
import Logo from "/assets/vegopa.png";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 394px;
  height: 670px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0 60px 0;
`;

const IsLazy = styled.div`
  position: absolute;
  top: 25px;
  right: 15px;
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

const Center = styled.div`
  position: absolute;
  top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuRecommendBtn = styled.button`
  width: 175px;
  height: 48px;
  border-radius: 20px;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.DARK_GRAY};
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MBTI = styled.button`
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Main = () => {
  return (
    <Wrapper>
      <Container>
        <IsLazy>
          <RouletteLink to="/soloEat/result">
            <h2>귀찮아...</h2>
            <span>룰렛으로 추천받기   <FaAngleRight size={23} /></span>
          </RouletteLink>
        </IsLazy>
        <Center>
          <LogoWrapper>
            <img src={Logo} alt="logo" />
          </LogoWrapper>
          <Link to="/mainChoice">
            <MenuRecommendBtn type="button">메뉴 추천받기</MenuRecommendBtn>
          </Link>
        </Center>
        <Bottom>
          <StyledLink to="/select/1">
            <MBTI>
              <p>밥먹기 전에 심심하면</p>
              <p>음BTI 해볼래요?</p>
            </MBTI>
            <FaAngleRight size={23} />
          </StyledLink>
        </Bottom>
      </Container>
    </Wrapper>
  );
};

export default Main;
