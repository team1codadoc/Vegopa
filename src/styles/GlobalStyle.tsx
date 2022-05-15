import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');
  ${reset};
   * {
    box-sizing: border-box;
  }

  html, body {
    width:100%;
    height:100%;
    font-family: 'Open Sans', sans-serif;
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
