import styled, { keyframes } from "styled-components";

const buttonGlow = keyframes`
  0%, 100% {
    box-shadow: 
      0 0 5px #05d9e8,
      0 0 10px #05d9e8,
      inset 0 0 5px rgba(5, 217, 232, 0.2);
  }
  50% {
    box-shadow: 
      0 0 10px #05d9e8,
      0 0 20px #05d9e8,
      0 0 30px #05d9e8,
      inset 0 0 10px rgba(5, 217, 232, 0.3);
  }
`;

export const Button = styled.button`
  width: 100%;
  background: linear-gradient(180deg, #1a1a2e 0%, #0a0a0f 100%);
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.5rem, 2vw, 0.7rem);
  border-radius: 4px;
  border: 3px solid #05d9e8;
  color: #05d9e8;
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  animation: ${buttonGlow} 2s ease-in-out infinite;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '> ';
  }

  &::after {
    content: ' <';
  }

  &:hover {
    background: linear-gradient(180deg, #05d9e8 0%, #0892d0 100%);
    color: #0a0a0f;
    border-color: #ff2a6d;
    transform: scale(1.02);
    box-shadow: 
      0 0 15px #ff2a6d,
      0 0 30px #ff2a6d;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    animation: none;
  }
`;
