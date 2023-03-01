import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        --color-primary: #CF5260;
        --color-secondary: #F7C331;
        --color-light: #F0F0F0;
        --color-dark: #374151;
        --color-black: black;
        --color-text-light: white;
        --color-grey: #CCC;
    }

    body {
        background: var(--color-light);
    }
`;

export default GlobalStyle;
