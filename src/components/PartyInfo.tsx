import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar/Avatar";
import Tag from "./Tag";

function PartyInfo() {
  const partyState = "모집중";
  const partyTitle = "국밥같이 먹으러 갈사람~";
  return (
    <ScrollableWrapper>
      <PartyImgWrapper>
        <PartyState>{partyState}</PartyState>
        <PartyImg src="/assets/party.png" />
      </PartyImgWrapper>
      <PartyInfoWrapper>
        <h2>{partyTitle}</h2>
        <PartyOwnerWrapper>
          <Avatar size="L" name="파티닉네임" />
          <div>2/8</div>
        </PartyOwnerWrapper>
        <InterestTags>
          <Tag>국밥</Tag>
          <Tag>국밥</Tag>
          <Tag>국밥</Tag>
          <Tag>국밥</Tag>
        </InterestTags>
        <PartyTextInfo>
          <p>모임 장소 : 신촌</p>
          <p>모임 시간 : 2022년 5월 18일</p>
          <p>참석자</p>
          <PartyParticipant>
            <Avatar size="S" name="파티닉네임" />
            <Avatar size="S" name="파티닉네임" />
            <Avatar size="S" name="파티닉네임" />
            <Avatar size="S" name="파티닉네임" />
            <Avatar size="S" name="파티닉네임" />
          </PartyParticipant>
        </PartyTextInfo>
      </PartyInfoWrapper>
    </ScrollableWrapper>
  );
}

export default PartyInfo;

const ScrollableWrapper = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 60px - 150px);
`;

const InterestTags = styled.div`
  display: grid;
  grid-gap: 10px;
  margin: 16px 0;
  grid-template-columns: repeat(7, 1fr);
  width: fit-content;
`;

const PartyTextInfo = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  > p {
    margin-bottom: 10px;
  }
`;

const PartyParticipant = styled.div`
  display: grid;
  grid-gap: 10px;
  padding-left: 12px;
  margin-top: 16px;
`;

const PartyOwnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    font-size: 18px;
  }
`;

const PartyImgWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const PartyState = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  position: absolute;
  left: 24px;
  top: 24px;
  color: #6bcb77;
`;

const PartyImg = styled.img`
  width: 100%;
`;

const PartyInfoWrapper = styled.div`
  padding: 24px;
  h2 {
    margin-bottom: 22px;
    font-weight: 700;
    font-size: 24px;
  }
`;
