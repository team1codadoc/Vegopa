import React from "react";
import styled from "styled-components";
import { Map } from "../components/map";

const Container = styled.div`
  position: relative;
`;

const Restaurant = () => {
  return (
    <Container>
      <Map />
    </Container>
  );
};

export default Restaurant;
