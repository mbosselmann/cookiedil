import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
} 

html, #root {
    height: 100%;
}

body {
    font-family: 'VT323', monospace;
    height: 100%;
    margin: 0;
    width: 100%;
    display: grid;
    place-items: center;
    background: linear-gradient(180deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);
    background-attachment: fixed;
    color: #e0e0e0;
    min-height: 100vh;
}

/* Scanline effect overlay */
body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15),
        rgba(0, 0, 0, 0.15) 1px,
        transparent 1px,
        transparent 2px
    );
    pointer-events: none;
    z-index: 1000;
}

input, button, select {
    font: inherit;
    padding: 8px 10px;
}

/* Custom scrollbar for retro feel */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #1a1a2e;
}

::-webkit-scrollbar-thumb {
    background: #ff2a6d;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #05d9e8;
}
`;

export default GlobalStyles;
