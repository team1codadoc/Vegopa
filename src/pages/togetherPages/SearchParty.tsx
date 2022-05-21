import React from "react";
import styled from "styled-components";

import { GiPartyPopper } from "react-icons/gi";
import { RiSearchEyeLine } from "react-icons/ri";

import { MapTogether } from "../../components/mapTogether";
import { HeaderComponent } from "../../components/Header";
import theme from "../../theme";

const Wrapper = styled.section`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 394px;
  height: 660px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border: 1px solid black;
`;

const MapContainer = styled.div`
  width: inherit;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 0;
`;

const NavBar = styled.div`
  width: inherit;
  height: 120px;
  position: absolute;
  bottom: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Button = styled.button`
  width: 60%;
  height: 40px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.LIGHT_GREEN};
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SearchParty = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderComponent />
        <MapContainer>
          <MapTogether />
        </MapContainer>
        <NavBar>
          <Button>내 파티 열기 </Button>
        </NavBar>
      </Container>
    </Wrapper>
  );
};

export default SearchParty;
