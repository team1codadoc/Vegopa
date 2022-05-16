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

              console.log(place);
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

  const onClickButtonHandler = () => {
    navigate(selectedPlace.place_url);
  };

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
          <p>{selectedPlace.place_name}</p>
          <p>{selectedPlace.road_address_name}</p>
          <p>{selectedPlace.phone}</p>

          <a href={selectedPlace.place_url}>
            <button>카카오 지도로 가기</button>
          </a>
        </PlaceInfo>
      )}
    </>
  );
};

const PlaceInfo = styled.div`
  position: absolute;
  background-color: #ffffff;
  bottom: 110px;
  z-index: 1;
  width: 100%;
  padding: 24px;
  border-radius: 16px;
`;