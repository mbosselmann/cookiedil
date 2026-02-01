import styled, { keyframes } from "styled-components";
import Title from "../components/Title";
import { Info } from "../components/Info.js";
import { Button } from "../components/Button.js";
import { CookiedilHead } from "../components/CookiedilHead.js";

export default function EndPage({
  cookies,
  seconds,
  amountOfHiredGrannies,
  onReset,
}) {
  return (
    <VictoryContainer>
      <Confetti />
      <Title />
      <VictoryInfo>
        <VictoryTitle>Victory!</VictoryTitle>
        <CrocodileWrapper>
          <CookiedilHead />
        </CrocodileWrapper>
        <VictoryText>
          Amazing! Croco got his birthday cookies!
        </VictoryText>
        <StatsGrid>
          <StatCard>
            <StatIcon>
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="45" fill="#D4A574"/>
                <circle cx="30" cy="35" r="8" fill="#5D4037"/>
                <circle cx="60" cy="30" r="6" fill="#5D4037"/>
                <circle cx="45" cy="55" r="7" fill="#5D4037"/>
              </svg>
            </StatIcon>
            <StatNumber>{cookies}</StatNumber>
            <StatLabel>Cookies Baked</StatLabel>
          </StatCard>
          <StatCard>
            <StatIcon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
            </StatIcon>
            <StatNumber>{seconds}s</StatNumber>
            <StatLabel>Time</StatLabel>
          </StatCard>
          <StatCard>
            <StatIcon>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </StatIcon>
            <StatNumber>{amountOfHiredGrannies}</StatNumber>
            <StatLabel>Grannies</StatLabel>
          </StatCard>
        </StatsGrid>
        <Button type="button" onClick={onReset}>
          Play Again!
        </Button>
      </VictoryInfo>
    </VictoryContainer>
  );
}

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const confettiFall = keyframes`
  0% { transform: translateY(-100%) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
`;

const VictoryContainer = styled.div`
  position: relative;
  max-width: 650px;
  padding: 20px;
  margin: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 30px;
  border: 6px solid #FFE66D;
  box-shadow: 
    12px 12px 0 #FF6B6B,
    24px 24px 0 #4ECDC4,
    0 0 80px rgba(255, 230, 109, 0.5);
  overflow: hidden;
`;

const Confetti = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
  
  &::before, &::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    background: #FF6B6B;
    animation: ${confettiFall} 3s linear infinite;
  }
  
  &::before {
    left: 20%;
    animation-delay: 0s;
    background: #FFE66D;
  }
  
  &::after {
    left: 70%;
    animation-delay: 1.5s;
    background: #4ECDC4;
  }
`;

const VictoryInfo = styled(Info)`
  background: transparent;
  border: none;
  box-shadow: none;
  
  &::before, &::after {
    display: none;
  }
`;

const VictoryTitle = styled.h2`
  font-family: 'Bangers', cursive;
  font-size: 3.5rem;
  color: #FFE66D;
  text-shadow: 
    3px 3px 0 #FF6B6B,
    6px 6px 0 #1A1A2E;
  letter-spacing: 4px;
  margin: 0;
  animation: ${float} 2s ease-in-out infinite;
`;

const CrocodileWrapper = styled.div`
  width: 180px;
  height: 180px;
  margin: 20px auto;
  padding: 20px;
  background: linear-gradient(145deg, #4ECDC4 0%, #95E1D3 100%);
  border-radius: 50%;
  border: 6px solid #1A1A2E;
  box-shadow: 8px 8px 0 #FFE66D;
  animation: ${float} 3s ease-in-out infinite;
`;

const VictoryText = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: #1A1A2E;
  margin: 0 0 20px;
`;

const StatsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 25px;
`;

const StatCard = styled.div`
  background: linear-gradient(145deg, #fff 0%, #f8f8f8 100%);
  padding: 15px 20px;
  border-radius: 16px;
  border: 4px solid #1A1A2E;
  box-shadow: 5px 5px 0 #FF6B6B;
  min-width: 100px;
  text-align: center;
  
  &:nth-child(2) {
    box-shadow: 5px 5px 0 #4ECDC4;
  }
  
  &:nth-child(3) {
    box-shadow: 5px 5px 0 #FFE66D;
  }
`;

const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto 8px;
  color: #1A1A2E;
`;

const StatNumber = styled.div`
  font-family: 'Bangers', cursive;
  font-size: 2rem;
  color: #FF6B6B;
  text-shadow: 1px 1px 0 #1A1A2E;
`;

const StatLabel = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
