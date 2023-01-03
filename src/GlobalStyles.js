import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
} 

html, #root {
    height: 100%;
}
body {
    font-family: 'Montserrat', sans-serif;
    height: 100%;
    margin: 0;
    width: 100%;
    display: grid;
    place-items: center;
}

input, button, select {
    font: inherit;
    padding: 8px 10px;
}
`;

export default GlobalStyles;
