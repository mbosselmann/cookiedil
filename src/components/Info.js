import styled from "styled-components";

export const Info = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background: linear-gradient(180deg, rgba(26, 26, 46, 0.95) 0%, rgba(10, 10, 15, 0.95) 100%);
  text-align: center;
  font-size: 1.4rem;
  font-family: 'VT323', monospace;
  border: 2px solid #05d9e8;
  border-radius: 8px;
  position: relative;
  box-shadow: 
    0 0 15px rgba(5, 217, 232, 0.2),
    inset 0 0 30px rgba(255, 42, 109, 0.05);

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #05d9e8, #ff2a6d, #05d9e8);
    border-radius: 10px;
    z-index: -1;
    opacity: 0.3;
  }

  & > * {
    margin: 0;
  }

  h2 {
    font-family: 'Press Start 2P', cursive;
    font-size: clamp(0.7rem, 2.5vw, 1rem);
    color: #ff2a6d;
    text-shadow: 0 0 10px #ff2a6d;
    letter-spacing: 2px;
  }

  p {
    color: #b0b0b0;
    line-height: 1.6;
    max-width: 500px;
  }
`;
