import type { Theme } from '@mui/system';
import { createGlobalStyle, ThemeProps } from 'styled-components';

const GlobalStyle = createGlobalStyle<ThemeProps<Theme>>`
  html,
  body,
   {
    overflow: hidden;
    height: 100%;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-family: Inter, sans-serif,
  }
  #root {
    display: flex;
    flex-direction: column; 
    min-height:100vh;
  }

  body {
    background: ${props => props.theme.palette.background.grey};

  }

  button, input, optgroup, select, textarea {
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 600;
    line-height: 1.4;
  }
`;

export default GlobalStyle;
