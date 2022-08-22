import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body{
    width: 100%;
    font-family: sans-serif;
    font-size: 1rem;
    margin: 0;
    padding: 0;
    background-color: #F5F5F7;
  }

  *{
    box-sizing: border-box;
  }

  ::-webkit-scrollbar{
    width: 5px;
    margin-left: 2rem;
  }

  ::-webkit-scrollbar-thumb{
    background-color: #ff825c;
    margin-left: 1rem;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track{
    margin-left: 1rem;
    background-color: peachpuff;
    border-radius: 10px;
  }
`;
