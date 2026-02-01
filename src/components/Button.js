import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #FF6B6B 0%, #F38181 100%);
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'Bangers', cursive;
  font-size: 1.3rem;
  letter-spacing: 3px;
  border-radius: 16px;
  border: 5px solid #1A1A2E;
  color: #1A1A2E;
  padding: 14px 28px;
  cursor: pointer;
  position: relative;
  box-shadow: 
    6px 6px 0 #1A1A2E,
    inset 0 -4px 0 rgba(0,0,0,0.2);
  transition: all 0.15s ease;
  text-shadow: 1px 1px 0 rgba(255,255,255,0.3);

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 
      9px 9px 0 #1A1A2E,
      inset 0 -4px 0 rgba(0,0,0,0.2);
    background: linear-gradient(135deg, #FFE66D 0%, #FFD93D 100%);
  }

  &:active {
    transform: translate(3px, 3px);
    box-shadow: 
      3px 3px 0 #1A1A2E,
      inset 0 -4px 0 rgba(0,0,0,0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: 4px 4px 0 #1A1A2E;
  }
`;
