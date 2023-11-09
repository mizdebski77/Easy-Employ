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
  word-break: break-word;
  background: ${({ theme }) => theme.color.mainColor};
  font-family: 'Playfair Display', serif;
  margin: 0;
}`;
