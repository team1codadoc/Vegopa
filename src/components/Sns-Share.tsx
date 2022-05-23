import React from "react";
import styled from "styled-components";
import kakaoIcon from "/assets/kakao_icon.png";
import facebookIcon from "/assets/facebook_icon.png";
import twitterIcon from "/assets/twitter_icon.png";

const SnsShare = () => {
  return (
    <ShareContianer>
      <div className="copy-link">
        <img src="/assets/chain_icon.png" alt="share link" />
      </div>
      <img className="share-kakao" src={kakaoIcon} alt="kakao-share" />
      <img className="share-facebook" src={facebookIcon} alt="facebook-share" />
      <img className="share-twitter" src={twitterIcon} alt="twitter-share" />
    </ShareContianer>
  );
};

const ShareContianer = styled.div`
  width: 212px;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  .copy-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    background-color: #f1f1f1;
    margin: 0 5px;
    img {
      width: 25px;
      height: 25px;
      object-fit: contain;
    }
  }
  img {
    width: 38px;
    height: 38px;
    margin: 0 4px;
    cursor: pointer;
    border-radius: 4px;
  }
`;

export default SnsShare;
