import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import EndPage from "./pages/EndPage";

export default function App() {
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [cookies, setCookies] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [amountOfHiredGrannies, setAmountofHiredGrannies] = useState(0);

  const updateHasGameStarted = useCallback((boolean) => {
    setHasGameStarted(boolean);
  }, []);

  const updateCookies = useCallback((numberOfCookies) => {
    setCookies(numberOfCookies);
  }, []);

  function handleReset() {
    setCookies(0);
    setHasGameStarted(false);
    setSeconds(0);
  }

  function updateAmountOfHiredGrannies(numberOfHiredGrannies) {
    setAmountofHiredGrannies(numberOfHiredGrannies);
  }

  useEffect(() => {
    if (hasGameStarted) {
      const interval = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [seconds, hasGameStarted]);

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
          {!hasGameStarted && seconds !== 0 ? (
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
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 10px;
  position: relative;
`;
