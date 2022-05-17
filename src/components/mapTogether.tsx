import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

export const Map = () => {
  const query = "치킨";
  const { kakao } = window;
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedPlace, setSelectedPlace] = useState<Place>();
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
    width: "390px",
    height: "360px",
  };

  return (
    <>
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
  background-color: #ffffff;
  bottom: 3vh;
  z-index: 1;
  width: 100%;
  padding: 24px;
  border-radius: 16px;
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
  background-color: #f9e000;
  border-radius: 10px;
  font-size: 20px;
  margin-bottom: 10px;
  transition: all 300ms ease-in-out;
`;
