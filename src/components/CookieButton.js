import styled, { keyframes } from "styled-components";
import { ReactComponent as Cookie } from "../images/cookie.svg";

export default function CookieButton({ onAdd }) {
  return (
    <ButtonWrapper>
      <Button
        onClick={onAdd}
        type="button"
        aria-label="click to have more cookies"
      >
        <StyledCookie />
        <ClickText>CLICK!</ClickText>
      </Button>
    </ButtonWrapper>
  );
}

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 
      0 0 20px #ff2a6d,
      0 0 40px #ff2a6d,
      0 0 60px rgba(255, 42, 109, 0.5);
    filter: drop-shadow(0 0 10px #ff2a6d);
  }
  50% {
    box-shadow: 
      0 0 30px #05d9e8,
      0 0 60px #05d9e8,
      0 0 80px rgba(5, 217, 232, 0.5);
    filter: drop-shadow(0 0 15px #05d9e8);
  }
`;

const clickPop = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

const floatText = keyframes`
  0%, 100% {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-10px);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
  position: relative;
  transition: transform 0.1s ease;

  &:active {
    animation: ${clickPop} 0.15s ease;
  }
`;

const StyledCookie = styled(Cookie)`
  width: 100%;
  height: auto;
  max-width: 250px;
  max-height: 250px;
  border-radius: 50%;
  animation: ${pulseGlow} 3s ease-in-out infinite;
  transition: all 0.1s ease;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 20px #ff2a6d) brightness(1.1);
  }
`;

const ClickText = styled.span`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Press Start 2P', cursive;
  font-size: 0.6rem;
  color: #05d9e8;
  text-shadow: 0 0 5px #05d9e8;
  pointer-events: none;
  animation: ${floatText} 2s ease-in-out infinite;
`;
