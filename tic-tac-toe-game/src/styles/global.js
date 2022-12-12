import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
    box-sizing: border-box;
  }

  html, body {
    height: 100vh;
  }

  body {
    color: #fff;
    background-color: #111;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
