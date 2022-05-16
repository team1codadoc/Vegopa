import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  min-height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6.5em;
`;

function Demo () {
  return (
    <Wrapper>
      <h1>DEMO :)</h1>
    </Wrapper>
  );
}

export default Demo;
