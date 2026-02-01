import styled from "styled-components";

export default function Title() {
  return (
    <TitleContainer>
      <ShadowText aria-hidden="true">Cookie Clicker</ShadowText>
      <Wrapper>
        <CookieIcon aria-hidden="true">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="45" fill="#D4A574"/>
            <circle cx="30" cy="35" r="8" fill="#5D4037"/>
            <circle cx="60" cy="30" r="6" fill="#5D4037"/>
            <circle cx="45" cy="55" r="7" fill="#5D4037"/>
            <circle cx="70" cy="60" r="5" fill="#5D4037"/>
            <circle cx="35" cy="70" r="6" fill="#5D4037"/>
            <circle cx="55" cy="75" r="4" fill="#5D4037"/>
          </svg>
        </CookieIcon>
        Cookie Clicker
        <CookieIcon aria-hidden="true">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="45" fill="#D4A574"/>
            <circle cx="30" cy="35" r="8" fill="#5D4037"/>
            <circle cx="60" cy="30" r="6" fill="#5D4037"/>
            <circle cx="45" cy="55" r="7" fill="#5D4037"/>
            <circle cx="70" cy="60" r="5" fill="#5D4037"/>
            <circle cx="35" cy="70" r="6" fill="#5D4037"/>
            <circle cx="55" cy="75" r="4" fill="#5D4037"/>
          </svg>
        </CookieIcon>
      </Wrapper>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  position: relative;
  padding: 20px 0;
`;

const ShadowText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translate(6px, 6px);
  font-family: 'Bangers', cursive;
  font-size: 3rem;
  color: #4ECDC4;
  white-space: nowrap;
  z-index: 0;
  opacity: 0.7;
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Wrapper = styled.h1`
  text-align: center;
  margin: 0;
  padding: 15px 0 10px;
  width: 100%;
  font-family: 'Bangers', cursive;
  font-size: 3rem;
  color: #FF6B6B;
  text-shadow: 
    3px 3px 0 #FFE66D,
    6px 6px 0 #1A1A2E;
  letter-spacing: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 480px) {
    font-size: 2rem;
    gap: 8px;
  }
`;

const CookieIcon = styled.span`
  width: 50px;
  height: 50px;
  display: inline-flex;
  animation: bounce 1s ease infinite;
  filter: drop-shadow(3px 3px 0 #1A1A2E);
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(10deg); }
  }
  
  &:last-child {
    animation-delay: 0.5s;
  }
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;
