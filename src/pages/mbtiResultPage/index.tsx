import React from "react";
import styled from "styled-components";
import { ReactComponent as Icon } from "../../icon/retry.svg";
import chainIcon from "/assets/chain_icon.png";
import kakaoIcon from "/assets/kakao_icon.png";
import facebookIcon from "/assets/facebook_icon.png";
import twitterIcon from "/assets/twitter_icon.png";

export const MbtiResultPage = () => {
  return (
    <ResultPageWrapper>
      <ResultPage>
        <CircleWrapper>
          <Circle className="Circle1">딱</Circle>
          <Circle className="Circle2">민</Circle>
          <Circle className="Circle3">부</Circle>
          <Circle className="Circle4">물</Circle>
        </CircleWrapper>
        <MbtiResultText>
          딱복먹는 아싸, 남들하고 어울리기보다는 집에 &quot;딱 &quot; 박혀있어서 혼자있는 시간을 좋아하는 군요!친구들과
          같이 먹기보다는 혼밥을 좋아하는 사람! <br /> <br />
          개성있는 민초를 좋아하는 당신, 감성적이며 자유로운 상상, 개방적 사고에 뛰어납니다! 밥을 먹을때 가게의 분위기를
          중요시 여기는군요! <br /> <br />
          근.본. 부먹을 선택한 당신 ,눅눅하고 원칙적인것을 좋아하 합니다. 고집이 있는편이나 결정을 잘내리는 편입니다.
          보통 친구들끼리 메뉴를 정할떄 주체가 되는 사람입니다. <br /> <br />
          물냉을 선택한 당신, 삼시세끼를 자기전에 정하시는 분이군요! 메뉴를 고를떄 체계적인 편입니다. 시간은 오래 걸릴
          수 있으나 물냉러들이 골라주는 메뉴는 열에 아홉은 성공하는편입니다. <br /> <br />
        </MbtiResultText>
        <AgainWrapper>
          <AgainButton>
            <Icon></Icon>
          </AgainButton>
          <AgainText>다시하기</AgainText>
        </AgainWrapper>
      </ResultPage>
      <ShareContainer>
        <img src="/assets/chain_icon.png" alt="share link" />
        <img className="share-kakao" src={kakaoIcon} alt="kakao-share" />
        <img className="share-facebook" src={facebookIcon} alt="facebook-share" />
        <img className="share-twitter" src={twitterIcon} alt="twitter-share" />
      </ShareContainer>
      <Foodimg>
        <div>당신에게 어울리는 음식 : 라면</div>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </Foodimg>
      <RecommendButton>메뉴 추천받기</RecommendButton>
    </ResultPageWrapper>
  );
};

export default MbtiResultPage;
const ResultPageWrapper = styled.div`
  padding: 40px 60px;
  text-align: center;
`;

const ResultPage = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "ACCchildrenheartOTF-Regular";
  font-size: 35px;
  font-weight: bold;
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
  border-radius: 50%;
  background-color: #f1f1f1;
  margin-right: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const MbtiResultText = styled.div`
  font-size: 16px;
  line-height: 24px;
  height: 230px;
  overflow-y: scroll;
  margin-bottom: 16px;
`;

const AgainWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
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
  font-weight: bold;
  font-family: "SBAggroB";
`;
