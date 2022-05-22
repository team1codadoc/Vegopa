import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import axios from "axios";

declare global {
  interface Window {
    kakao: any;
  }
}

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
  const query = "치킨";
  const { kakao } = window;
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedPlace, setSelectedPlace] = useState<Place>();
  const { data, isLoading } = useQuery("", async () => axios.get("http://localhost:8080/api/food"));
  const img = data?.data.foods[3].image;

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
          const markerImg = new kakao.maps.MarkerImage(
            // "https://i.pinimg.com/564x/82/ba/16/82ba16b3093cf8e9a127a1a77763b721.jpg",
            img,
            new kakao.maps.Size(64, 68),
            {
              shape: "poly",
              coords: "16,0,20,2,24,6,26,10,26,16,23,22,17,25,14,35,13,35,9,25,6,24,2,20,0,16,0,10,2,6,6,2,10,0",
            }
          );

          places.keywordSearch(query, placesSearchCB, {
            useMapBounds: true,
          });

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
            });
            kakao.maps.event.addListener(marker, "click", function () {
              setSelectedPlace(place);
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
    width: "100vw",
    height: "100vh",
  };

  return (
    <>
      <div ref={mapRef} style={mapStyle}></div>
      {selectedPlace && (
        <PlaceInfo>
          <ExitBtn onClick={() => setSelectedPlace(null)}>X</ExitBtn>
          <PlaceImg>파티 대표 이미지</PlaceImg>
          <PlaceName>국밥 같이 먹으러 갈 사람~</PlaceName>
          <hr></hr>
          <PlaceDetail>국밥, 한식, 국물, {selectedPlace.category_group_name}</PlaceDetail>

          <a href={"#"}>
            <StyleBtn>파티 참가하기</StyleBtn>
          </a>
        </PlaceInfo>
      )}
    </>
  );
};

const PlaceInfo = styled.div`
  position: absolute;
  background-color: #ffffff;
  top: 20vh;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 1;
  width: 220px;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;
const PlaceName = styled.div`
  font-size: 1.3rem;
`;
const PlaceDetail = styled.div`
  font-size: 0.8rem;
  margin-bottom: 1vh;
`;
const PlaceImg = styled.div`
  width: 90%;
  height: 10vh;
  border: 1px solid ${({ theme }) => theme.colors.GREY_COLOR};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.LIGHT_GREY};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
const StyleBtn = styled.button`
  width: 100%;
  padding: 10px 0;
  border: 2px solid ${({ theme }) => theme.colors.LIGHT_GREEN};
  background-color: ${({ theme }) => theme.colors.WHITE_COLOR};
  color: ${({ theme }) => theme.colors.LIGHT_GREEN};
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  font-size: 18px;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.WHITE_COLOR};
    background: ${({ theme }) => theme.colors.LIGHT_GREEN};
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  }
`;
const ExitBtn = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
  transition: all 300ms ease-in-out;
`;
