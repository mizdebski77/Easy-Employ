import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
body {
  background: ${({ theme }) => theme.color.mainColor};
  word-break: break-word;
  font-family: 'Roboto', sans-serif;
    margin: 0;
}`;
