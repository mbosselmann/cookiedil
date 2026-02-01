import styled, { keyframes } from "styled-components";
import { ReactComponent as Cookie } from "../images/cookie.svg";

export default function CookieButton({ onAdd }) {
  return (
    <ButtonContainer>
      <GlowOrb className="orb1" />
      <GlowOrb className="orb2" />
      <GlowOrb className="orb3" />
      <Button
        onClick={onAdd}
        type="button"
        aria-label="click to have more cookies"
      >
        <StyledCookie />
      </Button>
    </ButtonContainer>
  );
}

const float = keyframes`
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-15px) scale(1.05); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.2); }
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const GlowOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(20px);
  animation: ${pulse} 3s ease-in-out infinite;
  pointer-events: none;

  &.orb1 {
    width: 100px;
    height: 100px;
    background: #FF6B6B;
    top: 0;
    left: 20%;
    animation-delay: 0s;
  }

  &.orb2 {
    width: 80px;
    height: 80px;
    background: #4ECDC4;
    bottom: 10%;
    right: 15%;
    animation-delay: 1s;
  }

  &.orb3 {
    width: 60px;
    height: 60px;
    background: #FFE66D;
    top: 30%;
    right: 25%;
    animation-delay: 0.5s;
  }
`;

const Button = styled.button`
  background: linear-gradient(145deg, #FFE66D 0%, #F4D03F 100%);
  border: 6px solid #1A1A2E;
  padding: 20px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  box-shadow: 
    8px 8px 0 #FF6B6B,
    16px 16px 0 #4ECDC4;
  transition: all 0.15s ease;
  animation: ${float} 3s ease-in-out infinite;

  &:hover {
    transform: scale(1.05);
    box-shadow: 
      10px 10px 0 #FF6B6B,
      20px 20px 0 #4ECDC4,
      0 0 40px rgba(255, 107, 107, 0.5);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 
      4px 4px 0 #FF6B6B,
      8px 8px 0 #4ECDC4;
    animation: none;
  }
`;

const StyledCookie = styled(Cookie)`
  width: 100%;
  height: auto;
  max-width: 200px;
  max-height: 200px;
  filter: drop-shadow(3px 3px 0 rgba(0,0,0,0.2));
  transition: transform 0.15s ease;

  ${Button}:active & {
    transform: rotate(15deg);
  }
`;
