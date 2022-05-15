import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
   * {
    box-sizing: border-box;
  }

  html, body {
    width:100%;
    height:100%;
  }

  a {
    text-decoration:none;
    color: #767676;
  }

  button{
    border: none;
    background: inherit;
    outline: none;
  }
`;

export default GlobalStyle;
