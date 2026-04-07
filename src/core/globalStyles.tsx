import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: ${({ theme }) => theme.color.mainColor};
    color: ${({ theme }) => theme.color.fontSecond};
    font-family: 'DM Sans', sans-serif;
    word-break: break-word;
    min-height: 100vh;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      radial-gradient(ellipse 80% 50% at 20% -10%, rgba(79,142,247,0.06) 0%, transparent 60%),
      radial-gradient(ellipse 60% 40% at 80% 110%, rgba(124,92,252,0.05) 0%, transparent 60%);
    pointer-events: none;
    z-index: 0;
  }

  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: ${({ theme }) => theme.color.mainColor}; }
  ::-webkit-scrollbar-thumb { background: ${({ theme }) => theme.color.borderMid}; border-radius: 3px; }

  h1, h2, h3, h4 { font-family: 'Syne', sans-serif; }

  a { text-decoration: none; }

  button { font-family: 'DM Sans', sans-serif; }

  input, textarea, select { font-family: 'DM Sans', sans-serif; }
`;
