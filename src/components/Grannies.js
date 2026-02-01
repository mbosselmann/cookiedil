import React from "react";
import styled, { keyframes } from "styled-components";
import granniedefault from "../images/grannie.svg";
import granniecool from "../images/granniecool.svg";
import { Button } from "./Button";

export default function Grannies({ cookies, grannies, updateGrannies }) {
  return (
    <GranniesContainer>
      <SectionTitle>Your Baking Team</SectionTitle>
      <List>
        {grannies.map((grannie, index) => (
          <GrannieCard key={grannie.id} $isHired={grannie.isHired} $index={index}>
            <GrannieImageWrapper $isHired={grannie.isHired}>
              <GrannieImage
                src={grannie.isHired ? granniecool : granniedefault}
                alt={grannie.name}
              />
              {grannie.isHired && <StatusBadge>Hired!</StatusBadge>}
            </GrannieImageWrapper>
            <GrannieName $isHired={grannie.isHired}>{grannie.name}</GrannieName>
            {grannie.isHired && (
              <CookiesPerSecond>+{grannie.cookiesPerSecond}/sec</CookiesPerSecond>
            )}
          </GrannieCard>
        ))}
      </List>
      {grannies.map((grannie) => {
        return (
          !grannie.isHired &&
          cookies > grannie.amountOfCookies && (
            <HirePrompt key={grannie.id}>
              <PromptText>
                Hire <strong>{grannie.name}</strong> for{" "}
                <CostBadge>{grannie.costs} cookies</CostBadge>
              </PromptText>
              <Button type="button" onClick={() => updateGrannies(grannie)}>
                Hire Now!
              </Button>
            </HirePrompt>
          )
        );
      })}
    </GranniesContainer>
  );
}

const wiggle = keyframes`
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
`;

const GranniesContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  background: linear-gradient(135deg, rgba(149, 225, 211, 0.3) 0%, rgba(78, 205, 196, 0.2) 100%);
  border-radius: 20px;
  border: 4px solid #1A1A2E;
  box-shadow: 6px 6px 0 #FFE66D;
`;

const SectionTitle = styled.h3`
  font-family: 'Bangers', cursive;
  font-size: 1.8rem;
  color: #4ECDC4;
  text-shadow: 2px 2px 0 #1A1A2E;
  text-align: center;
  margin: 0 0 15px;
  letter-spacing: 2px;
`;

const GrannieCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  background: ${props => props.$isHired 
    ? 'linear-gradient(145deg, #FFE66D 0%, #F4D03F 100%)' 
    : 'rgba(255, 255, 255, 0.5)'};
  border-radius: 16px;
  border: 3px solid ${props => props.$isHired ? '#4ECDC4' : '#ccc'};
  box-shadow: ${props => props.$isHired ? '4px 4px 0 #FF6B6B' : '2px 2px 0 #ddd'};
  transition: all 0.3s ease;
  animation: ${props => props.$isHired ? wiggle : 'none'} 2s ease-in-out infinite;
  animation-delay: ${props => props.$index * 0.2}s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.$isHired ? '6px 8px 0 #FF6B6B' : '4px 6px 0 #ddd'};
  }
`;

const GrannieImageWrapper = styled.div`
  position: relative;
  padding: 5px;
  border-radius: 50%;
  background: ${props => props.$isHired 
    ? 'linear-gradient(145deg, #4ECDC4, #95E1D3)' 
    : 'transparent'};
`;

const StatusBadge = styled.span`
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  background: #FF6B6B;
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
  border: 2px solid #1A1A2E;
  white-space: nowrap;
  animation: ${sparkle} 1.5s ease-in-out infinite;
`;

const GrannieImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

const GrannieName = styled.span`
  font-weight: 700;
  font-size: 0.85rem;
  color: ${props => props.$isHired ? '#1A1A2E' : '#666'};
  margin-top: 8px;
`;

const CookiesPerSecond = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #4ECDC4;
  background: #1A1A2E;
  padding: 2px 8px;
  border-radius: 8px;
  margin-top: 4px;
`;

const List = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
  margin: 0 0 15px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const HirePrompt = styled.div`
  background: linear-gradient(145deg, rgba(255, 107, 107, 0.2) 0%, rgba(243, 129, 129, 0.15) 100%);
  border: 3px dashed #FF6B6B;
  border-radius: 16px;
  padding: 15px;
  margin-top: 15px;
  text-align: center;
`;

const PromptText = styled.p`
  margin: 0 0 12px;
  font-size: 1rem;
  color: #1A1A2E;
  
  strong {
    color: #FF6B6B;
    font-family: 'Bangers', cursive;
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
`;

const CostBadge = styled.span`
  display: inline-block;
  background: #FFE66D;
  color: #1A1A2E;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  border: 2px solid #1A1A2E;
  margin-left: 5px;
`;
