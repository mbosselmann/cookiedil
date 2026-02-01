import { useCallback, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import EndPage from "./pages/EndPage";

export default function App() {
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [cookies, setCookies] = useState(900);
  const [seconds, setSeconds] = useState(0);
  const [amountOfHiredGrannies, setAmountofHiredGrannies] = useState(3);
  const [isGamePaused, setIsGamePaused] = useState(false);
  const cookiesRef = useRef(cookies);

  const updateHasGameStarted = useCallback((boolean) => {
    setHasGameStarted(boolean);
  }, []);

  const updateCookies = useCallback((numberOfCookiesOrUpdater) => {
    if (typeof numberOfCookiesOrUpdater === 'function') {
      setCookies((prev) => {
        const newValue = numberOfCookiesOrUpdater(prev);
        cookiesRef.current = newValue;
        return newValue;
      });
    } else {
      cookiesRef.current = numberOfCookiesOrUpdater;
      setCookies(numberOfCookiesOrUpdater);
    }
  }, []);

  function handleReset() {
    setCookies(0);
    setHasGameStarted(false);
    setSeconds(0);
    setIsGamePaused(false);
    setAmountofHiredGrannies(0);
  }

  function updateAmountOfHiredGrannies(numberOfHiredGrannies) {
    setAmountofHiredGrannies(numberOfHiredGrannies);
  }

  // Update ref when cookies changes
  useEffect(() => {
    cookiesRef.current = cookies;
  }, [cookies]);

  useEffect(() => {
    if (hasGameStarted && !isGamePaused) {
      const interval = setInterval(() => {
        // Check cookies from ref to avoid restarting interval
        if (cookiesRef.current < 1000) {
          setSeconds(prev => prev + 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [hasGameStarted, isGamePaused]);

  return (
    <>
      {cookies >= 1000 ? (
        <EndPage
          cookies={cookies}
          seconds={seconds}
          amountOfHiredGrannies={amountOfHiredGrannies}
          onReset={handleReset}
        />
      ) : (
        <Main>
          {!hasGameStarted ? (
            <HomePage updateHasGameStarted={updateHasGameStarted} />
          ) : (
            <GamePage
              cookies={cookies}
              seconds={seconds}
              updateCookies={updateCookies}
              amountOfHiredGrannies={amountOfHiredGrannies}
              updateAmountOfHiredGrannies={updateAmountOfHiredGrannies}
              hasGameStarted={hasGameStarted}
              updateHasGameStarted={updateHasGameStarted}
              onReset={handleReset}
              setIsGamePaused={setIsGamePaused}
            />
          )}
        </Main>
      )}
    </>
  );
}

const Main = styled.main`
  height: 100%;
  max-width: 650px;
  font-family: 'Fredoka', sans-serif;
  padding: 20px;
  position: relative;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 30px;
  border: 6px solid #FF6B6B;
  box-shadow: 
    12px 12px 0 #4ECDC4,
    24px 24px 0 #FFE66D,
    0 0 60px rgba(255, 107, 107, 0.3);
  margin: 20px;
  backdrop-filter: blur(10px);

  &::before {
    content: "";
    position: absolute;
    top: -15px;
    right: -15px;
    width: 60px;
    height: 60px;
    background: #FFE66D;
    border-radius: 50%;
    border: 4px solid #FF6B6B;
    z-index: 10;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 30px;
    width: 40px;
    height: 40px;
    background: #4ECDC4;
    border-radius: 50%;
    border: 4px solid #FFE66D;
  }
`;
