import React from "react";
import RootRoute from "./routes";
import GlobalStyles from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { MbtiProvider } from "./store/MbtiContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MbtiProvider>
        <GlobalStyles />
        <RootRoute />
      </MbtiProvider>
    </ThemeProvider>
  );
}

export default App;
