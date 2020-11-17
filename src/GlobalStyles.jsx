import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --flour-green-color: #99f0ca;
    --dark-flour-green-color: #0ed076;
    --light-color: #efefef;
    --dark-color: #141414;

    --main-font: 'B612', sans-serif;
    
    --radius: 15px;
    --md-radius: calc(var(--radius) - 5px);
    --sm-radius: calc(var(--radius) - 10px);

    --space: var(--radius);
    --md-space: var(--md-radius);
    --sm-space: var(--sm-radius);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  html {
    font-family: var(--main-font);
    margin: var(--space);
    color: var(--dark-color);
  }

`;


export default GlobalStyle;