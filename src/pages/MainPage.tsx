import React from "react";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 40px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  h2 {
    font-size: 1.75rem;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .roulette {
    display: flex;
    font-size: 12px;
    font-weight: 400;
    align-items: center;
  }
`;

const MenuRecommendBtn = styled.button`
  width: 175px;
  height: 48px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.LIGHT_GREEN};
  margin-top: 80px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const RouletteLink = styled(Link)`
  color: ${({ theme }) => theme.colors.BLACK_COLOR};
`;
const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Main = () => {
  return (
    <Wrapper>
      <Header>
        <RouletteLink to="/soloEat/loading">
          <h2>귀찮아...</h2>
          <span className="roulette">
            룰렛으로 추천받기 <FaAngleRight size={16} fontWeight={400} />
          </span>
        </RouletteLink>
      </Header>
      <MainWrapper>
        <img src="/assets/vegopa.png" alt="logo" />
        <Link to="/mainChoice">
          <MenuRecommendBtn type="button">메뉴 추천받기</MenuRecommendBtn>
        </Link>
      </MainWrapper>
      <StyledLink to="/select/1">
        <div>
          <p>밥먹기 전에 심심하면</p>
          <p>음BTI 해볼래요?</p>
        </div>
        <FaAngleRight size={23} />
      </StyledLink>
    </Wrapper>
  );
};

export default Main;
