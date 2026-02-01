import styled, { keyframes } from "styled-components";
import { ReactComponent as Cookiedil } from "../images/cookiedil.svg";
import { Button } from "../components/Button.js";
import { Info } from "../components/Info.js";
import Title from "../components/Title.js";

export default function HomePage({ updateHasGameStarted }) {
  return (
    <>
      <Title />
      <Info>
        <GameBadge>Cookie Clicker Game</GameBadge>
        <h2>Help Croco Get His Birthday Cookies!</h2>
        <DescriptionBox>
          <p>
            It's Croco's birthday! Help us bake <strong>1000 delicious cookies</strong> for 
            the hungry crocodile. But watch out - Croco is impatient and might try 
            to steal cookies before they're ready!
          </p>
        </DescriptionBox>
        <FeatureList>
          <FeatureItem $color="#FF6B6B">
            <FeatureIcon>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10"/>
              </svg>
            </FeatureIcon>
            Click to bake cookies
          </FeatureItem>
          <FeatureItem $color="#4ECDC4">
            <FeatureIcon>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
            </FeatureIcon>
            Hire grannies for help
          </FeatureItem>
          <FeatureItem $color="#FFE66D">
            <FeatureIcon>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
            </FeatureIcon>
            Fend off hungry Croco
          </FeatureItem>
        </FeatureList>
        <CookiedilWrapper>
          <StyledCookiedil />
        </CookiedilWrapper>
        <Button onClick={updateHasGameStarted}>Start Baking!</Button>
      </Info>
    </>
  );
}

const bounce = keyframes`
  0%, 100% { transform: translateY(0) rotate(-5deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
`;

const GameBadge = styled.span`
  background: linear-gradient(135deg, #FF6B6B 0%, #F38181 100%);
  color: white;
  font-family: 'Bangers', cursive;
  font-size: 1rem;
  padding: 8px 20px;
  border-radius: 20px;
  border: 3px solid #1A1A2E;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const DescriptionBox = styled.div`
  background: rgba(255, 255, 255, 0.7);
  padding: 15px 20px;
  border-radius: 16px;
  border: 3px dashed #4ECDC4;
  
  p {
    margin: 0;
    line-height: 1.7;
    
    strong {
      color: #FF6B6B;
      font-weight: 700;
    }
  }
`;

const FeatureList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  padding: 8px 16px;
  border-radius: 25px;
  border: 3px solid ${props => props.$color};
  font-weight: 600;
  font-size: 0.9rem;
  color: #1A1A2E;
  box-shadow: 3px 3px 0 ${props => props.$color};
`;

const FeatureIcon = styled.span`
  width: 20px;
  height: 20px;
  color: currentColor;
`;

const CookiedilWrapper = styled.div`
  padding: 20px;
  background: linear-gradient(145deg, #4ECDC4 0%, #95E1D3 100%);
  border-radius: 24px;
  border: 5px solid #1A1A2E;
  box-shadow: 8px 8px 0 #FFE66D;
  animation: ${bounce} 3s ease-in-out infinite;
`;

const StyledCookiedil = styled(Cookiedil)`
  width: 100%;
  max-width: 200px;
  height: auto;
  filter: drop-shadow(2px 2px 0 rgba(0,0,0,0.2));
`;
