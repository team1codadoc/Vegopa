import React, { useState } from "react";
import styled from "styled-components";
import foodImage from "/assets/food/민초치킨.jpeg";
import { FcShop } from "react-icons/fc";
import Spinner from "../components/Spinner";
import SnsShare from "../components/Sns-Share";

const ChoicResult = () => {
  const [loading, setLoading] = useState(true);
  return (
    <Container>
      <h1 className="ir">골라줘 결과 사이트</h1>
      <TextContainer>
        <Comment>오늘은</Comment>
        <Title>민초 치킨</Title>
        <Comment>어때요?</Comment>
      </TextContainer>
      <ImageWrapper>{loading ? <Spinner /> : <FoodImage src={foodImage} alt="food" />}</ImageWrapper>
      <Button type="button">
        <FcShop size="24" />
        <span className="ir">근처 맛집보기 버튼</span>
        <span>맛집 알아보기</span>
      </Button>

      <SnsShare />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 50px 0;
  font-size: 2rem;
  font-weight: 300;

  .ir {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }
`;

const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: 500;
  margin: 12px 0;
`;
const Comment = styled.h3``;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 200px;
  min-height: 196px;
  border-radius: 20px;
  overflow: hidden;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.colors.LIGHT_GREY};
`;

const FoodImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  background-color: ${({ theme }) => theme.colors.LIGHT_GREY};

  span {
    padding: 5px;
    margin-bottom: -2px;
  }
`;

export default ChoicResult;
