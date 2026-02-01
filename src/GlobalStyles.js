import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Fredoka:wght@400;500;600;700&display=swap');

* {
    box-sizing: border-box;
} 

html, #root {
    height: 100%;
}

body {
    font-family: 'Fredoka', sans-serif;
    height: 100%;
    margin: 0;
    width: 100%;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, #FF6B6B 0%, #FFE66D 25%, #4ECDC4 50%, #95E1D3 75%, #F38181 100%);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    min-height: 100vh;
    overflow-x: hidden;
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(circle at 20% 80%, rgba(255, 107, 107, 0.4) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(78, 205, 196, 0.4) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(255, 230, 109, 0.3) 0%, transparent 40%),
        radial-gradient(circle at 90% 90%, rgba(149, 225, 211, 0.4) 0%, transparent 40%);
    pointer-events: none;
    z-index: 0;
}

#root {
    position: relative;
    z-index: 1;
}

input, button, select {
    font: inherit;
    padding: 8px 10px;
}

::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    background: #FFE66D;
}

::-webkit-scrollbar-thumb {
    background: #FF6B6B;
    border-radius: 6px;
    border: 2px solid #FFE66D;
}
`;

export default GlobalStyles;
