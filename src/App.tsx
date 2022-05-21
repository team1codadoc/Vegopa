import React from "react";
import RootRoute from "./routes";
import GlobalStyles from "./styles/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import { MbtiProvider } from "./store/MbtiContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MbtiProvider>
        <AppWrapper>
          <GlobalStyles />
          <RootRoute />
        </AppWrapper>
      </MbtiProvider>
    </ThemeProvider>
  );
}

export default App;

const AppWrapper = styled.main`
  background-color: #f1eee9;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  > div {
    background-color: #fff;
    max-width: 575px;
    margin: auto;
  }
`;
