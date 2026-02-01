import styled from "styled-components";

export const Info = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  padding: 25px;
  background: linear-gradient(145deg, rgba(255, 230, 109, 0.3) 0%, rgba(78, 205, 196, 0.2) 100%);
  text-align: center;
  font-size: 1.15rem;
  border-radius: 24px;
  border: 4px solid #1A1A2E;
  box-shadow: 8px 8px 0 #FF6B6B;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -30px;
    right: -30px;
    width: 80px;
    height: 80px;
    background: #4ECDC4;
    border-radius: 50%;
    opacity: 0.5;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: -20px;
    width: 60px;
    height: 60px;
    background: #FFE66D;
    border-radius: 50%;
    opacity: 0.5;
  }

  & > * {
    margin: 0;
    position: relative;
    z-index: 1;
  }

  h2 {
    font-family: 'Bangers', cursive;
    font-size: 2rem;
    color: #FF6B6B;
    text-shadow: 2px 2px 0 #1A1A2E;
    letter-spacing: 2px;
  }

  p {
    color: #1A1A2E;
    line-height: 1.7;
    font-weight: 500;
    max-width: 90%;
  }
`;
