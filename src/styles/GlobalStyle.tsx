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

  @font-face { //어린이 마음고움체
    font-family: 'ACCchildrenheartOTF-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2112-2@1.0/ACCchildrenheartOTF-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {  //어그로체
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'TmoneyRoundWindExtraBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

export default GlobalStyle;
