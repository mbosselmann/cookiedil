import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button } from "../components/Button.js";
import Grannies from "../components/Grannies.js";
import { granniesData } from "../data.js";
import CookieButton from "../components/CookieButton.js";
import Crocodile from "../components/Crocodile.js";

export default function GamePage({
  cookies,
  seconds,
  amountOfHiredGrannies,
  updateCookies,
  updateAmountOfHiredGrannies,
  hasGameStarted,
  updateHasGameStarted,
  onReset,
}) {
  const [grannies, setGrannies] = useState(granniesData);
  const [cookiesPerSecond, setCookiesPerSecond] = useState(0);
  const [showCookiedil, setShowCookiedil] = useState(250);
  const [amountOfCookies, setAmountOfCookies] = useState(100);

  function handleAdd() {
    updateCookies(cookies + 1);
    if (!hasGameStarted) {
      updateHasGameStarted(true);
    }
    if (cookies >= showCookiedil) {
      updateHasGameStarted(false);
    }
  }

  function handleShowCookiedil(number) {
    setShowCookiedil(showCookiedil + 200);
    updateCookies(cookies - number);
    updateHasGameStarted(true);
  }

  function updateGrannies(grannie) {
    if (cookies >= grannie.costs) {
      updateCookies(cookies - grannie.costs);
      const newGrannies = grannies.map((granniePerson) =>
        grannie.id === granniePerson.id
          ? { ...granniePerson, isHired: true }
          : granniePerson
      );
      setGrannies(newGrannies);
      setCookiesPerSecond(cookiesPerSecond + grannie.cookiesPerSecond);
      updateAmountOfHiredGrannies(amountOfHiredGrannies + 1);
    }
  }

  useEffect(() => {
    if (hasGameStarted) {
      const interval = setInterval(() => {
        if (cookiesPerSecond > 0) {
          updateCookies(cookies + cookiesPerSecond);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [hasGameStarted, cookies, cookiesPerSecond, updateCookies]);

  useEffect(() => {
    if (cookies >= showCookiedil) {
      updateHasGameStarted(false);
      function updateAmountOfCookies() {
        if (amountOfHiredGrannies === 1) {
          setAmountOfCookies(80);
        }
        if (amountOfHiredGrannies === 2) {
          setAmountOfCookies(60);
        }
        if (amountOfHiredGrannies === 3) {
          setAmountOfCookies(40);
        }
        if (amountOfHiredGrannies === 4) {
          setAmountOfCookies(20);
        }
        if (amountOfHiredGrannies === 5) {
          setAmountOfCookies(0);
        }
      }
      updateAmountOfCookies();
    }
  }, [cookies, showCookiedil, amountOfHiredGrannies, updateHasGameStarted]);

  return (
    <>
      <ButtonContainer>
        <Button onClick={updateHasGameStarted} type="button">
          Back to Start
        </Button>
        <Button onClick={onReset} type="button" disabled={cookies <= 0}>
          Restart Game
        </Button>
      </ButtonContainer>
      <div>
        <List>
          <li>Cookies: {cookies}</li>
          <li>Seconds: {seconds}</li>
        </List>
        <CookieButton onAdd={handleAdd} />
        <Grannies
          cookies={cookies}
          grannies={grannies}
          updateGrannies={updateGrannies}
        />
        {cookies >= showCookiedil && (
          <Crocodile
            onShowCookiedil={() => handleShowCookiedil(amountOfCookies)}
            amountOfCookies={amountOfCookies}
            amountOfHiredGrannies={amountOfHiredGrannies}
          />
        )}
      </div>
    </>
  );
}

const List = styled.ul`
  max-width: 650px;
  list-style: none;
  text-align: center;
  padding: 15px 20px;
  margin: 0 0 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: linear-gradient(180deg, rgba(26, 26, 46, 0.9) 0%, rgba(10, 10, 15, 0.9) 100%);
  border: 2px solid #05d9e8;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(5, 217, 232, 0.2);

  li {
    font-family: 'Press Start 2P', cursive;
    font-size: clamp(0.5rem, 2vw, 0.7rem);
    color: #ff2a6d;
    text-shadow: 0 0 5px #ff2a6d;
    padding: 5px 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 15px;
`;
