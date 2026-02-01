import styled, { keyframes } from "styled-components";
import { Button } from "./Button";
import { CookiedilHead } from "../components/CookiedilHead.js";

export default function Crocodile({
  onShowCookiedil,
  amountOfCookies,
  amountOfHiredGrannies
}) {
  return (
    <Overlay>
      <Article>
        <WarningBadge>Alert!</WarningBadge>
        <Title>The Crocodile Attacks!</Title>
        <CrocodileWrapper>
          <CookiedilHead />
        </CrocodileWrapper>
        <Description>
          The hungry crocodile is back! He smells your delicious cookies 
          and wants to steal them before you reach 1000!
        </Description>
        <StatsBox>
          <StatItem>
            <StatLabel>Your Grannies</StatLabel>
            <StatValue>{amountOfHiredGrannies}</StatValue>
          </StatItem>
          <StatItem $danger>
            <StatLabel>Cookies Lost</StatLabel>
            <StatValue>-{amountOfCookies}</StatValue>
          </StatItem>
        </StatsBox>
        <Tip>
          Tip: Hire more grannies to reduce cookie theft!
        </Tip>
        <Button onClick={onShowCookiedil} type="button">
          Chase Away!
        </Button>
      </Article>
    </Overlay>
  );
}

const shake = keyframes`
  0%, 100% { transform: translateX(0) rotate(0deg); }
  25% { transform: translateX(-5px) rotate(-2deg); }
  75% { transform: translateX(5px) rotate(2deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 26, 46, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const Article = styled.article`
  position: relative;
  max-width: 400px;
  margin: 20px;
  background: linear-gradient(145deg, #fff 0%, #FFF5E1 100%);
  border: 6px solid #FF6B6B;
  border-radius: 24px;
  padding: 30px;
  box-shadow: 
    12px 12px 0 #1A1A2E,
    0 0 60px rgba(255, 107, 107, 0.5);
  animation: ${shake} 0.5s ease-in-out;
  text-align: center;
`;

const WarningBadge = styled.span`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #FF6B6B;
  color: white;
  font-family: 'Bangers', cursive;
  font-size: 1.2rem;
  padding: 8px 20px;
  border-radius: 20px;
  border: 4px solid #1A1A2E;
  letter-spacing: 2px;
  animation: ${pulse} 1s ease-in-out infinite;
`;

const Title = styled.h2`
  font-family: 'Bangers', cursive;
  font-size: 2rem;
  color: #FF6B6B;
  text-shadow: 2px 2px 0 #1A1A2E;
  margin: 15px 0;
  letter-spacing: 2px;
`;

const CrocodileWrapper = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto 15px;
  padding: 15px;
  background: linear-gradient(145deg, #4ECDC4 0%, #95E1D3 100%);
  border-radius: 50%;
  border: 5px solid #1A1A2E;
  box-shadow: 6px 6px 0 #FFE66D;
  animation: ${shake} 2s ease-in-out infinite;
`;

const Description = styled.p`
  color: #1A1A2E;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 20px;
`;

const StatsBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 15px;
`;

const StatItem = styled.div`
  background: ${props => props.$danger 
    ? 'linear-gradient(145deg, #FF6B6B 0%, #F38181 100%)' 
    : 'linear-gradient(145deg, #4ECDC4 0%, #95E1D3 100%)'};
  padding: 12px 20px;
  border-radius: 12px;
  border: 3px solid #1A1A2E;
  box-shadow: 4px 4px 0 ${props => props.$danger ? '#1A1A2E' : '#FFE66D'};
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: #1A1A2E;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const StatValue = styled.div`
  font-family: 'Bangers', cursive;
  font-size: 1.8rem;
  color: #1A1A2E;
`;

const Tip = styled.p`
  background: #FFE66D;
  color: #1A1A2E;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 10px 15px;
  border-radius: 12px;
  border: 3px solid #1A1A2E;
  margin: 0 0 20px;
`;
