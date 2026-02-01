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
  max-width: 600px;
  font-family: 'VT323', monospace;
  padding: 20px;
  position: relative;
  background: rgba(10, 10, 15, 0.8);
  border: 3px solid #ff2a6d;
  border-radius: 8px;
  box-shadow: 
    0 0 20px rgba(255, 42, 109, 0.3),
    inset 0 0 60px rgba(5, 217, 232, 0.05);
  margin: 20px;
`;
