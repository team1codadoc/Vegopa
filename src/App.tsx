import React from "react";
import RootRoute from "./routes";
import GlobalStyles from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RootRoute />
    </ThemeProvider>
  );
}

export default App;
