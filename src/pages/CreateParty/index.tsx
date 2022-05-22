import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PartyLocationMap } from "../../components/partyLocationMap";
import PropTypes from "prop-types";

type partyInform = {
  title: string;
  image: string;
  total: number;
  taste: string[];
  meetingDate: any | unknown;
  location: string;
  coordinates: { lat: number; lng: number };
};
interface Box {
  url: string;
}

const Restaurant = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [creator, setCreator] = useState("");
  const [total, setTotal] = useState(2);
  const [taste, setTaste] = useState([]);
  const [meetingDate, setMeetingDate] = useState();
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  const partyInform: partyInform = { title, image, total, taste, meetingDate, location, coordinates };
  console.log(partyInform);

  const [addTasteInput, setAddTasteInput] = useState("");
  const [addTasteBtn, setAddTasteBtn] = useState(false);
  const addTaste = () => {
    const res = [...taste, addTasteInput];
    setTaste(res);
    setAddTasteInput("");
    setAddTasteBtn(false);
  };

  const [time, setTime] = useState("");

  const changeDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = currentDate.getDate();
    const joinTime = time.split(":");
    const getTime = new Date(year, month, date, +joinTime[0], +joinTime[1]);
  };
  useEffect(() => {
    changeDate();
  }, [time]);

  const [search, setSearch] = useState("");
  const [openMap, setOpenMap] = useState(false);
  const propFunc = (place: any): void => {
    setLocation(place.place_name);
    setCoordinates({ lat: place.x, lng: place.y });
  };
  const closeMap = (boolean: boolean) => {
    setOpenMap(boolean);
  };

  const imageUploader = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "dtsaonv8");
    console.log(data);
    const cloudName = "deiyompy0";
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
      method: "POST",
      body: data,
    });

    return await res.json();
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const imageUploadBtn = () => {
    inputRef.current.click();
  };
  const fileChange = async (e) => {
    console.log(e.target.files[0]);
    const uploaded = await imageUploader(e.target.files[0]);
    setImage(uploaded.url);
  };

  return (
    <Wrapper>
      <Container>
        {openMap ? <PartyLocationMap query={search} propFunc={propFunc} closeMap={closeMap} /> : ""}
        <Header>
          <SectionTitle>파티 생성</SectionTitle>
        </Header>

        <Body>
          <PhotoUpload>
            {image ? <Box url={image}></Box> : <p>대표 사진을 업로드 해주세요</p>}

            <input ref={inputRef} type="file" accept="image/*" onChange={fileChange} />
            <button onClick={imageUploadBtn}>이미지 업로드</button>
          </PhotoUpload>
          <PartyTitle>
            <Title>파티명</Title>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
            <button>중복확인</button>
          </PartyTitle>
          <LimitedNumber>
            <Title>파티인원</Title>
            <input
              type="range"
              min="2"
              max="8"
              value={total}
              onChange={(e) => {
                setTotal(+e.target.value);
              }}
            ></input>
            <p>{total} 명</p>
          </LimitedNumber>
          <Taste>
            <TasteHead>
              <Title>음식취향</Title>
              <button onClick={() => setAddTasteBtn((prev) => !prev)}>+ 추가</button>
            </TasteHead>
            {addTasteBtn && (
              <TasteInput>
                <input
                  type="text"
                  onChange={(e) => {
                    setAddTasteInput(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      addTaste();
                    }
                  }}
                ></input>
                <button onClick={addTaste}>등록</button>
              </TasteInput>
            )}
            <TasteBody>
              {!taste[0] ? (
                <p>+ 음식 취향을 등록해주세요</p>
              ) : (
                taste.map((v, i) => {
                  return (
                    <TasteElement key={i}>
                      <p>{v}</p>
                      <button
                        onClick={() => {
                          const arr = [...taste];
                          arr.splice(i, 1);
                          setTaste(arr);
                        }}
                      >
                        X
                      </button>
                    </TasteElement>
                  );
                })
              )}
            </TasteBody>
          </Taste>
          <PartyLocation>
            <Title>모이는곳</Title>
            <input
              placeholder="장소명으로 검색해주세요"
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setOpenMap(true);
                }
              }}
            />
            <button
              onClick={() => {
                if (search) {
                  setOpenMap(true);
                } else {
                  alert("검색어를 입력해주세요.");
                }
              }}
            >
              🔍
            </button>
          </PartyLocation>

          <PartyTime>
            <Title>모이는시간</Title>

            <input type="time" onChange={(e) => setTime(e.target.value)} />
          </PartyTime>
          <Register>
            <button>등록</button>
          </Register>
        </Body>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.WHITE_COLOR};
  width: 394px;
  height: 670px;
  padding: 20px;
`;
const Header = styled.div`
  display: block;
  width: 100%;
  height: 11%;
`;
const SectionTitle = styled.div`
  background-color: ${({ theme }) => theme.colors.LIGHT_GREY};
  width: 120px;
  height: 50px;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  width: 100%;
  padding: 5px;
`;
const PhotoUpload = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  input {
    display: none;
  }
  button {
    margin: 10px 0;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.LIGHT_GREY};
  }
`;
const Box = styled.div<Box>`
  background: center url(${(props) => props.url});
  background-size: contain;
  width: 100px;
  height: 120px;
  padding: 10px;
`;

const PartyTitle = styled.div`
  padding: 0 0 30px 0;
  display: flex;
  button {
    background-color: ${({ theme }) => theme.colors.LIGHT_GREY};
    border-radius: 10px;
  }
`;
const LimitedNumber = styled.div`
  padding: 0 0 30px 0;
  display: flex;
`;
const Taste = styled.div`
  padding: 0 0 30px 0;
`;
const TasteHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const TasteInput = styled.div`
  width: 100%;
  height: 25px;
  background-color: yellow;
  display: flex;
  justify-content: center;
`;

const TasteBody = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border: 1px solid ${({ theme }) => theme.colors.DARK_GRAY};
  border-radius: 10px;
  padding: 10px;
`;
const TasteElement = styled.div`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.LIGHT_GREY};
  margin-left: 10px;
  p {
    margin-right: 10px;
    font-size: 0.8rem;
  }
  button {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.WHITE_COLOR};
    background-color: ${({ theme }) => theme.colors.DARK_RED};
    border-radius: 10px;
  }
`;
const PartyLocation = styled.div`
  padding: 0 0 30px 0;
  display: flex;
`;
const PartyTime = styled.div`
  padding: 0 0 30px 0;
  display: flex;
`;
const Register = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    background-color: ${({ theme }) => theme.colors.LIGHT_GREY};
    width: 100px;
    height: 50px;
    border-radius: 10px;
    font-size: 1.3rem;
  }
`;
const Title = styled.div`
  width: 24%;
  font-size: 1.1rem;
`;
export default Restaurant;
