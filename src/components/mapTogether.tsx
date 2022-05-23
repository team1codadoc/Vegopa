import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import axios from "axios";
import Spinner from "./Spinner";

declare global {
  interface Window {
    kakao: any;
  }
}

// type Party = {
//   Object
//   config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}
//   data:
//     party: Array(3)
//     0:
//     coordinates: {lat: 23, lng: 25}
//     createdAt: "2022-05-20T17:18:06.919Z"
//     creator: "6287cb0a5d9f1c6463dfaa2d"
//     image: "https://www.everland.com/everedu/img/common/main_slide32.jpg"
//     location: "서울시 스프린트구 배고파구 치킨동"
//     meetingDate: "1970-01-01T00:00:01.000Z"
//     participants: []
//     taste: (3) ['민초', '치킨', '떡볶이']
//     title: "파티 테스트"
//     total: 4
//     updatedAt: "2022-05-20T17:18:06.919Z"
//     _id: "6287cd4e3aaf2cd2d8a45eaa"
// };
type Place = {
  place_name: string;
  distance: string;
  place_url: string;
  category_name: string;
  address_name: string;
  road_address_name: string;
  id: string;
  phone: string;
  category_group_code: string;
  category_group_name: string;
  x: string;
  y: string;
};

export const MapTogether = () => {
  const { kakao } = window;
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedPlace, setSelectedPlace] = useState<any>();
  const { data, isLoading } = useQuery("", async () => axios.get("https://vegopa.herokuapp.com/api/party"));
  console.log(data);
  // const query = "치킨";
  const navigate = useNavigate();

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const container = mapRef.current;
          const options = {
            center: new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude),
            level: 4,
          };

          const map = new kakao.maps.Map(container, options);
          const places = new kakao.maps.services.Places(map);
          const partyImg = data?.data.party[0].image;
          const markerImg = new kakao.maps.MarkerImage(partyImg, new kakao.maps.Size(54, 58), {
            alt: "마커 이미지",
            shape: "poly",
            coords: "16,0,20,2,24,6,26,10,26,16,23,22,17,25,14,35,13,35,9,25,6,24,2,20,0,16,0,10,2,6,6,2,10,0",
          });

          function getQueries() {
            for (let i = 0; i < data.data.party.length; i++) {
              return data?.data.party[i].taste;
            }
          }

          getQueries().map((query) => {
            places.keywordSearch(query, placesSearchCB, {
              useMapBounds: true,
            });
            console.log(query);
          });

          // places.keywordSearch(query, placesSearchCB, {
          //   useMapBounds: true,
          // });

          const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
          function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
              for (let i = 0; i < data.length; i++) {
                displayMarker(data[i]);
              }
            }
          }

          function displayMarker(place) {
            const marker = new kakao.maps.Marker({
              map: map,
              position: new kakao.maps.LatLng(place.y, place.x),
              image: markerImg,
            });
            kakao.maps.event.addListener(marker, "click", function () {
              setSelectedPlace(place);
              // navigate(`/${place.id}`);
            });
          }
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            alert("위치정보 권한을 확인해주세요.");
          }
        }
      );
    } else {
      alert("브라우저가 gps를 지원하지 않습니다.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  // 지도 사이즈 관련 스타일
  const mapStyle = {
    width: "100%",
    height: "100vh",
  };

  return (
    <>
      {isLoading ? (
        <Loading>
          <Spinner />
          <p>지도 불러오는 중...</p>
        </Loading>
      ) : (
        ""
      )}
      <div ref={mapRef} style={mapStyle}></div>
      {selectedPlace && (
        <PlaceInfo>
          <PlaceName>{selectedPlace.place_name}</PlaceName>
          <hr></hr>
          <PlaceDetail>{selectedPlace.road_address_name}</PlaceDetail>
          <PlaceDetail>{selectedPlace.phone}</PlaceDetail>

          <a href={selectedPlace.place_url}>
            <StyleBtn>카카오 지도로 보기</StyleBtn>
          </a>
        </PlaceInfo>
      )}
    </>
  );
};

const PlaceInfo = styled.div`
  position: absolute;
  bottom: 3vh;
  z-index: 1000;
  width: 100%;
  padding: 24px;
  border-radius: 16px;
`;
const Loading = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin-top: 3%;
  }
`;
const PlaceName = styled.div`
  font-size: 1.3rem;
`;
const PlaceDetail = styled.div`
  font-size: 1.1rem;
  margin-bottom: 1vh;
`;
const StyleBtn = styled.button`
  width: 100%;
  padding: 16px 0;
  border: 3px solid ${({ theme }) => theme.colors.GREY_COLOR};
  background-color: ${({ theme }) => theme.colors.KaKao_Yellow};
  border-radius: 10px;
  font-size: 20px;
  margin-bottom: 10px;
  transition: all 300ms ease-in-out;
`;
