import React from "react";
import RootRoute from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyles from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { MbtiProvider } from "./store/MbtiContext";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false, refetchOnMount: false } },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <MbtiProvider>
          <GlobalStyles />
          <RootRoute />
        </MbtiProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
