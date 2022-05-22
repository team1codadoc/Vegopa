import React from "react";
import RootRoute from "./routes";
import GlobalStyles from "./styles/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import { MbtiProvider } from "./store/MbtiContext";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false, refetchOnMount: false } },
  });
  return (
    <AppWrapper>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <MbtiProvider>
            <GlobalStyles />
            <RootRoute />
          </MbtiProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </AppWrapper>
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
