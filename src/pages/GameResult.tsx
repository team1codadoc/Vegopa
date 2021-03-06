import React, { useState } from "react";
import styled from "styled-components";
import { FcShop } from "react-icons/fc";
import Spinner from "../components/Spinner";
import SnsShare from "../components/Sns-Share";
import { Link } from "react-router-dom";
import { requestAPI } from "../api/Request";

import { useQuery } from "react-query";
import RetryButton from "../components/RetryButton";

const ChoicResult = () => {
  const query = useQuery("foods", requestAPI.reqFoodAPI);

  if (query.isLoading) return <Spinner></Spinner>;

  const length = query.data.data.foods.length;

  const random = Math.floor(Math.random() * length);
  return (
    <Container>
      <h1 className="ir">골라줘 결과 사이트</h1>
      <TextContainer>
        <Comment>오늘은</Comment>
        <Title>{query.data.data.foods[random].title}</Title>
        <Comment>어때요?</Comment>
      </TextContainer>
      <ImageWrapper>
        {query.isLoading ? <Spinner /> : <FoodImage src={query.data.data.foods[random].image} alt="food" />}
      </ImageWrapper>
      <Link to={`/restaurant/${query.data.data.foods[random].title}`}>
        <Button type="button">
          <FcShop size="24" />
          <span className="ir">근처 맛집보기 버튼</span>
          <span>맛집 알아보기</span>
        </Button>
      </Link>
      <SnsShare />
      <RetryButton />
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
  background-color: ${({ theme }) => theme.colors.LIGHT_GREEN};
  border-radius: 8px;
  cursor: pointer;

  span {
    padding: 5px;
    margin-bottom: -2px;
  }
`;

export default ChoicResult;
