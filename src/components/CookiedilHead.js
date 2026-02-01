import styled, { keyframes } from "styled-components";
import { ReactComponent as Cookiedil } from "../images/cookiedilhead.svg";

const headBob = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-5px) rotate(-2deg);
  }
  75% {
    transform: translateY(-5px) rotate(2deg);
  }
`;

export const CookiedilHead = styled(Cookiedil)`
  width: 100%;
  max-width: 150px;
  height: auto;
  filter: drop-shadow(0 0 15px #ff2a6d);
  animation: ${headBob} 2s ease-in-out infinite;
`;
