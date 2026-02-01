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
  setIsGamePaused,
}) {
  const [grannies, setGrannies] = useState(() => {
    return granniesData.map((grannie, index) => ({
      ...grannie,
      isHired: index < amountOfHiredGrannies
    }));
  });
  const [cookiesPerSecond, setCookiesPerSecond] = useState(() => {
    return granniesData
      .slice(0, amountOfHiredGrannies)
      .reduce((total, grannie) => total + grannie.cookiesPerSecond, 0);
  });
  const [showCookiedil, setShowCookiedil] = useState(250);
  const [amountOfCookies, setAmountOfCookies] = useState(100);
  const [isCrocodileShowing, setIsCrocodileShowing] = useState(false);

  // Reset grannies and cookiesPerSecond when amountOfHiredGrannies resets to 0
  useEffect(() => {
    if (amountOfHiredGrannies === 0 && cookies === 0) {
      setGrannies(granniesData.map((grannie) => ({
        ...grannie,
        isHired: false
      })));
      setCookiesPerSecond(0);
      setShowCookiedil(250);
      setAmountOfCookies(100);
      setIsCrocodileShowing(false);
    }
  }, [amountOfHiredGrannies, cookies]);

  function handleAdd() {
    updateCookies(cookies + 1);
    if (!hasGameStarted) {
      updateHasGameStarted(true);
    }
  }

  function handleShowCookiedil(number) {
    setShowCookiedil(prev => prev + 200);
    updateCookies(cookies - number);
    setIsCrocodileShowing(false);
    setIsGamePaused(false);
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
      setCookiesPerSecond(prev => prev + grannie.cookiesPerSecond);
      updateAmountOfHiredGrannies(amountOfHiredGrannies + 1);
    }
  }

  useEffect(() => {
    if (hasGameStarted && !isCrocodileShowing) {
      const interval = setInterval(() => {
        if (cookiesPerSecond > 0) {
          updateCookies(prev => prev + cookiesPerSecond);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [hasGameStarted, cookiesPerSecond, updateCookies, isCrocodileShowing]);

  useEffect(() => {
    if (cookies >= showCookiedil && !isCrocodileShowing) {
      setIsCrocodileShowing(true);
      setIsGamePaused(true);
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
  }, [cookies, showCookiedil, amountOfHiredGrannies, isCrocodileShowing, setIsGamePaused]);

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
        {isCrocodileShowing && (
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
  padding: 20px;
  margin: 0 0 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
  background: linear-gradient(145deg, rgba(255, 230, 109, 0.4) 0%, rgba(255, 107, 107, 0.2) 100%);
  border-radius: 20px;
  border: 4px solid #1A1A2E;
  box-shadow: 6px 6px 0 #4ECDC4;

  li {
    font-family: 'Bangers', cursive;
    font-size: 1.5rem;
    color: #1A1A2E;
    background: white;
    padding: 10px 25px;
    border-radius: 12px;
    border: 3px solid #1A1A2E;
    box-shadow: 4px 4px 0 #FF6B6B;
    letter-spacing: 1px;
    
    &:first-child {
      background: linear-gradient(145deg, #FFE66D 0%, #F4D03F 100%);
    }
    
    &:last-child {
      background: linear-gradient(145deg, #4ECDC4 0%, #95E1D3 100%);
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
  
  button {
    font-size: 0.9rem;
    padding: 10px 16px;
  }
`;
