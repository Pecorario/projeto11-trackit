import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, body, label, input, button {
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
  }

  h1 {
    font-family: 'Playball', cursive;
  }
`;

export default GlobalStyle;
