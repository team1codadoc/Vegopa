import { filterProps } from "framer-motion";
import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

import { getPartyInfo } from "../../queryAPI";

type Party = {
  title: string;
  owner: number;
  total: number;
  taste: string[];
  participants: number[];
  date: string;
  address: [];
  picture: string;
  party_status: boolean;
  party_id: number;
};

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
  border: 1px solid black;
  border-radius: 10px;
`;

const Column = styled.div`
  width: 100%;
  height: 55px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  &:nth-child(2) {
    top: 100px;
    height: 200px;
  }
  &:nth-child(3) {
    top: 320px;
    height: 30px;
  }
  &:last-child {
    top: 370px;
    height: 200px;
    flex-direction: column;
  }
`;

const TextBox = styled.div`
  width: 40%;
  height: 30px;
`;

const ImgBox = styled.img.attrs((props) => ({ src: props.src, alt: "Party Picture" }))`
  width: 30%;
  height: 30px;
`;

const Tags = styled.div`
  display: flex;
  overflow-x: scroll;
`;

const Tag = styled.div`
  height: 30px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.YELLOW_COLOR};
  color: ${(props) => props.theme.colors.WHITE_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: large;
`;

function JoinParty() {
  const { data, isLoading } = useQuery<any>(["party"], getPartyInfo);
  const imgSrc = data?.results[0].picture;
  console.log(data);
  return (
    <Wrapper>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Container>
            <Column>Header</Column>
            <Column>
              <ImgBox src={data?.results[0].picture} />
              <TextBox>
                <span>{data?.results[0].address}</span>
                <Title>{data?.results[0].title}</Title>
              </TextBox>
            </Column>
            <Column>
              참석 인원: {data?.results[0].participants} / {data?.results[0].total}
            </Column>
            <Column>
              <Title>🍴 음식 취향 </Title>
              <Tags>
                <Tag> # 마라탕 </Tag>
                <Tag> # 민초 </Tag>
              </Tags>
            </Column>
          </Container>
        </>
      )}
    </Wrapper>
  );
}

export default JoinParty;
