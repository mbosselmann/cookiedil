import styled from "styled-components";
import { Button } from "./Button";
import { CookiedilHead } from "../components/CookiedilHead.js";

export default function Crocodile({
  onShowCookiedil,
  amountOfCookies,
  amountOfHiredGrannies
}) {
  return (
    <Article>
      <h2>The Crocodile comes!</h2>
      <CookiedilHead />
      <p>
        The crocodile is curious and wonders how many cookies you have already
        baked. Although he knows that he should get the cookies only when 1000
        cookies are ready, he tries to steal cookies from you.
      </p>
      <p>
        Unfortunately, you only have
        {amountOfHiredGrannies === 1
          ? " one grannie "
          : ` ${amountOfHiredGrannies} grannies `}
        who can help you drive the crocodile away with her rolling pin.
      </p>
      <p>The crocodile steals {amountOfCookies} cookies from you.</p>
      <Button onClick={onShowCookiedil} type="button">
        Ok
      </Button>
    </Article>
  );
}

const Article = styled.article`
  position: absolute;
  margin: 20px;
  top: 10%;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(26, 26, 46, 0.98) 0%, rgba(10, 10, 15, 0.98) 100%);
  border: 3px solid #ff2a6d;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 
    0 0 30px rgba(255, 42, 109, 0.5),
    inset 0 0 40px rgba(255, 42, 109, 0.1);
  text-align: center;
  z-index: 100;

  h2 {
    font-family: 'Press Start 2P', cursive;
    font-size: clamp(0.6rem, 2vw, 0.9rem);
    color: #ff2a6d;
    text-shadow: 0 0 10px #ff2a6d;
    margin-bottom: 15px;
    animation: blink 0.5s ease-in-out infinite alternate;
  }

  p {
    font-family: 'VT323', monospace;
    font-size: 1.2rem;
    color: #b0b0b0;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  @keyframes blink {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.7;
    }
  }
`;
