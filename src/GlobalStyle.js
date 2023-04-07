import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  };

  *, ::after, ::before {
    box-sizing: inherit;
  };

  body {
    background-color: ${({ theme }) => theme.color.gray};
    font-family: 'Montserrat', sans-serif;
    margin: 0 auto;
    word-break: break-word;
    max-width: 1000px;
    line-height: 1.5;
  };
`;