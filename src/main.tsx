import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const url = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_MAP_API_ID}`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <script type="text/javascript" src={url}> */}
    <App />
    {/* </script> */}
  </React.StrictMode>
);
