import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Icon } from "../asset/icon/retry.svg";
import kakaoIcon from "/assets/kakao_icon.png";
import facebookIcon from "/assets/facebook_icon.png";
import twitterIcon from "/assets/twitter_icon.png";
import { MbtiContext } from "../store/MbtiContext";
import { useNavigate } from "react-router-dom";
import { mbtiQuestion, mbtiQuestionType } from "../Constant/constant";

export const MbtiResultPage = () => {
  const context = useContext(MbtiContext);
  const navigate = useNavigate();

  const ans: mbtiQuestionType[] = [];
  mbtiQuestion.forEach((v, i) => {
    ans.push(v.selects.find((v) => v.id === context.answerIds[i]));
  });
  useEffect(() => {
    if (context.answerIds.some((v) => v === undefined)) {
      navigate("/select/1", { replace: true });
    }
  }, []);

  return (
    <ResultPageWrapper>
      <ResultPage>
        <CircleWrapper>
          {ans.map((v, i) => (
            <Circle key={v.short} className={`Circle${i + 1}`}>
              {v.short}
            </Circle>
          ))}
        </CircleWrapper>
        <MbtiResultText>
          {ans.map((v, i) => (
            <div key={i}>
              <h3 className={`color${i}`}>{v.title}</h3>
              <span>{v.contents}</span>
              <br />
              <br />
            </div>
          ))}
        </MbtiResultText>
      </ResultPage>
      <div>
        <AgainWrapper>
          <AgainButton>
            <Icon></Icon>
          </AgainButton>
          <AgainText>다시하기</AgainText>
        </AgainWrapper>
        <ShareContainer>
          <img src="/assets/chain_icon.png" alt="share link" />
          <img className="share-kakao" src={kakaoIcon} alt="kakao-share" />
          <img className="share-facebook" src={facebookIcon} alt="facebook-share" />
          <img className="share-twitter" src={twitterIcon} alt="twitter-share" />
        </ShareContainer>

        <RecommendButton>메뉴 추천받기</RecommendButton>
      </div>
    </ResultPageWrapper>
  );
};

export default MbtiResultPage;
const ResultPageWrapper = styled.div`
  padding: 40px 30px;
  text-align: center;
`;

const ResultPage = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 35px;
  height: 70%;
  .Circle1 {
    transform: translateY(-12px);
    color: #e21e1e;
  }
  .Circle2 {
    transform: translateY(12px);
    color: #1e6de2;
  }
  .Circle3 {
    transform: translateY(-12px);
    color: #d31ee2;
  }
  .Circle4 {
    transform: translateY(12px);
    color: #558b2f;
  }
`;

const CircleWrapper = styled.div`
  display: flex;
  margin-bottom: 42px;
  justify-content: center;
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-family: "TmoneyRoundWindExtraBold";
  border-radius: 50%;
  background-color: #f1f1f1;
  margin-right: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: bold;
`;

const MbtiResultText = styled.div`
  background-color: 8px solid ${({ theme }) => theme.colors.LIGHT_GREY};
  border-radius: 20px;
  padding: 30px 20px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin-bottom: 16px;
  text-align: start;
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .color0 {
    color: #e21e1e;
  }
  .color1 {
    color: #1e6de2;
  }
  .color2 {
    color: #d31ee2;
  }
  .color3 {
    color: #558b2f;
  }
  span {
    /* word-break: keep-all; */
    display: inline-block;
    margin-left: 8px;
  }
`;

const AgainWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  margin-bottom: 20px;
`;

const AgainButton = styled.div`
  display: flex;
  justify-content: center;
  width: 30px;
  margin-right: 7px;
`;

const AgainText = styled.div`
  font-size: 25px;
  padding-top: 5px;
`;

const ShareContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 38px;
  img {
    border-radius: 8px;
    margin-right: 5px;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;

const Foodimg = styled.div`
  text-align: center;
  font-family: "SBAggroB";
  margin-bottom: 10px;
  div {
    margin-bottom: 10px;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 20px;
  }
`;

const RecommendButton = styled.button`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 200px;
  height: 58px;
  border-radius: 20px;
  margin: auto;
  background-color: #f1f1f1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: "TmoneyRoundWindExtraBold";
`;
