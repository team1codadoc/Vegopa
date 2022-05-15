import React from "react";
import styled from "styled-components";
import foodImage from "/assets/food/민초치킨.jpeg";
import testIcon from "/assets/chain_icon.png";

const ChoicResult = () => {
  return (
    <Container>
      <h1 className="ir">골라줘 결과 사이트</h1>
      <TextContainer>
        <Comment>오늘은</Comment>
        <Title>민초 치킨</Title>
        <Comment>어때요?</Comment>
      </TextContainer>
      <ImageWrapper>
        <FoodImage src={foodImage} alt="food" />
      </ImageWrapper>
      <Button type="button">
        <span className="ir">근처 맛집보기 버튼</span>
        <span>맛집 알아보기</span>
      </Button>

      <ShareContianer>
        <img src="/assets/chain_icon.png" alt="share link" />
        <img src="/assets/chain_icon.png" alt="share link" />
        <img src="/assets/chain_icon.png" alt="share link" />
        <img src="/assets/chain_icon.png" alt="share link" />
      </ShareContianer>
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
  width: 100%;
  max-width: 200px;
  min-height: 228px;
  border: 0.5px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  margin: 20px 0;
`;

const FoodImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const Button = styled.button`
  width: 210px;
  height: 80px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  ::before {
    display: block;
    content: "";
    width: 20px;
    height: 20px;
    background: url(${testIcon});
    margin-right: 6px;
  }
`;

const ShareContianer = styled.div`
  width: 212px;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;

  img {
    width: 35px;
    height: 35px;
    object-fit: contain;
  }
`;

export default ChoicResult;
