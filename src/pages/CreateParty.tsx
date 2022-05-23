import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PartyLocationMap } from "../components/partyLocationMap";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { requestAPI } from "../api/Request";

type partyInform = {
  title: string;
  image: string;
  total: number;
  taste: string[];
  meetingDate: any;
  location: string;
  coordinates: { lat: number; lng: number };
  creator: string;
};
interface Box {
  url: string;
}

const Restaurant = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [creator, setCreator] = useState("6288f85f6c2022fa4b3e77b5");
  const [total, setTotal] = useState(2);
  const [taste, setTaste] = useState([]);
  const [meetingDate, setMeetingDate] = useState<Date>();
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  const partyInform: partyInform = { title, image, total, taste, meetingDate, location, coordinates, creator };

  const [addTasteInput, setAddTasteInput] = useState("");
  const [addTasteBtn, setAddTasteBtn] = useState(false);
  const addTaste = () => {
    if (addTasteInput) {
      const res = [...taste, addTasteInput];
      setTaste(res);
    } else {
      alert("한 음절 이상 입력해주세요.");
    }
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
    setMeetingDate(getTime);
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
    const cloudName = import.meta.env.VITE_CLOUD_NAME;
    // const cloudName = "deiyompy0";

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

  const onHandleCreate = async () => {
    const res = await requestAPI.reqCreatePartyAPI(partyInform);
    if (res.status === 200) {
      alert("파티가 등록되었습니다.");
      navigate("/together");
    }
  };

  return (
    <Wrapper>
      <Container>
        <GoBack>
          <FaAngleLeft onClick={() => navigate(-1)} />
        </GoBack>
        {openMap ? (
          <PartyLocationMap query={search} propFunc={propFunc} closeMap={closeMap} />
        ) : (
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
                  <button onClick={() => setAddTasteBtn((prev) => !prev)}>+ 음식 취향을 입력해주세요</button>
                ) : (
                  <TasteElementGrid>
                    {taste.map((v, i) => {
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
                    })}
                  </TasteElementGrid>
                )}
              </TasteBody>
            </Taste>
            <PartyLocation>
              <Title>모이는곳</Title>
              {location ? (
                location
              ) : (
                <>
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
                </>
              )}
            </PartyLocation>

            <PartyTime>
              <Title>모이는시간</Title>

              <input type="time" onChange={(e) => setTime(e.target.value)} />
            </PartyTime>
            <Register>
              <button onClick={onHandleCreate}>등록</button>
            </Register>
          </Body>
        )}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.WHITE_COLOR};
  padding: 20px;
  width: 394px;
  height: 670px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    margin-left: 10px;
    background-color: ${({ theme }) => theme.colors.LIGHT_GREY};
    border-radius: 10px;
  }
`;
const LimitedNumber = styled.div`
  padding: 0 0 30px 0;
  display: flex;
  input {
    width: 150px;
  }
  p {
    margin-left: 15px;
  }
`;
const Taste = styled.div`
  padding: 0 0 px 0;
`;
const TasteHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const TasteInput = styled.div`
  padding-left: 40px;
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: center;
`;

const TasteBody = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  border: 1px solid ${({ theme }) => theme.colors.DARK_GRAY};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 30px;
`;
const TasteElementGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
`;
const TasteElement = styled.div`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.LIGHT_GREY};
  p {
    margin-right: 10px;
    font-size: 0.8rem;
  }
  button {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.WHITE_COLOR};
    background-color: ${({ theme }) => theme.colors.DARK_RED};
    border-radius: 10px;
  }
`;
const PartyLocation = styled.div`
  padding: 0 0 30px 0;
  display: flex;
  button {
    margin-left: 10px;
  }
`;
const PartyTime = styled.div`
  padding: 0 0 30px 0;
  display: flex;
  input {
    width: 150px;
  }
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
    :hover {
      background-color: ${({ theme }) => theme.colors.DARK_GRAY};
    }
  }
`;
const Title = styled.div`
  width: 28%;
  font-size: 1.1rem;
`;
const GoBack = styled.div`
  position: fixed;
  top: 15px;
  left: 15px;
  font-size: 1.8em;
`;

export default Restaurant;
