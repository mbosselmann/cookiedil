import styled, { keyframes } from "styled-components";

export default function Title() {
  return (
    <Wrapper>
      <PixelIcon aria-hidden="true">[ ]</PixelIcon>
      <TitleText>DEAL-UP DELIGHT</TitleText>
      <PixelIcon aria-hidden="true">[ ]</PixelIcon>
    </Wrapper>
  );
}

const flicker = keyframes`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow: 
      0 0 4px #ff2a6d,
      0 0 11px #ff2a6d,
      0 0 19px #ff2a6d,
      0 0 40px #ff2a6d;
  }
  20%, 24%, 55% {
    text-shadow: none;
  }
`;

const glowPulse = keyframes`
  0%, 100% {
    text-shadow: 
      0 0 5px #05d9e8,
      0 0 10px #05d9e8,
      0 0 20px #05d9e8;
  }
  50% {
    text-shadow: 
      0 0 10px #05d9e8,
      0 0 20px #05d9e8,
      0 0 40px #05d9e8;
  }
`;

const Wrapper = styled.h1`
  text-align: center;
  margin: 0;
  padding: 20px 0 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background: linear-gradient(180deg, rgba(26, 26, 46, 0.9) 0%, rgba(10, 10, 15, 0.9) 100%);
  border-bottom: 3px solid #05d9e8;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, #05d9e8, #ff2a6d, #05d9e8, transparent);
  }
`;

const TitleText = styled.span`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.8rem, 3vw, 1.4rem);
  color: #ff2a6d;
  animation: ${flicker} 3s linear infinite;
  letter-spacing: 2px;
`;

const PixelIcon = styled.span`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.6rem, 2vw, 1rem);
  color: #05d9e8;
  animation: ${glowPulse} 2s ease-in-out infinite;
`;
