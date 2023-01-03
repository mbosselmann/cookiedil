import styled from "styled-components";
import { ReactComponent as Cookiedil } from "../images/cookiedil.svg";
import { Button } from "../components/Button.js";
import { Info } from "../components/Info.js";
import Title from "../components/Title.js";

export default function HomePage({ updateHasGameStarted }) {
  return (
    <>
      <Title />
      <Info>
        <h2>About the game</h2>
        <p>
          It's the birthday of our crocodile Croco! As a birthday present we
          want to give him 1000 cookies. Croco is already very hungry and
          impatient. Help us bake 1000 cookies for the hungry crocodile as soon
          as possible. Get support from the grannies by giving them cookies in
          exchange as well. And try to fend off the hungry croco that wants to
          eat your delicious cookies first.
        </p>
        <StyledCookiedil />
        <Button onClick={updateHasGameStarted}>Start</Button>
      </Info>
    </>
  );
}

const StyledCookiedil = styled(Cookiedil)`
  width: 50%;
  max-width: 500px;
  height: auto;
`;
