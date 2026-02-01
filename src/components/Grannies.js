import React from "react";
import styled from "styled-components";
import granniedefault from "../images/grannie.svg";
import granniecool from "../images/granniecool.svg";
import { Button } from "./Button";

export default function Grannies({ cookies, grannies, updateGrannies }) {
  return (
    <>
      <List>
        {grannies.map((grannie) => (
          <li key={grannie.id}>
            <GrannieImage
              src={grannie.isHired ? granniecool : granniedefault}
            />
            {grannie.name}
          </li>
        ))}
      </List>
      {grannies.map((grannie) => {
        return (
          !grannie.isHired &&
          cookies > grannie.amountOfCookies && (
            <React.Fragment key={grannie.id}>
              <p>
                Do you want to engage {grannie.name}? You need to pay{" "}
                {grannie.costs} cookies once.
              </p>
              <Button type="button" onClick={() => updateGrannies(grannie)}>
                Hire
              </Button>
            </React.Fragment>
          )
        );
      })}
    </>
  );
}

const GrannieImage = styled.img`
  width: 100%;
  max-width: 80px;
  height: 80px;
  filter: drop-shadow(0 0 8px #05d9e8);
  transition: all 0.3s ease;

  &:hover {
    filter: drop-shadow(0 0 15px #ff2a6d);
    transform: scale(1.05);
  }
`;

const List = styled.ul`
  list-style: none;
  text-align: center;
  padding: 15px 10px;
  margin: 0 0 12px;
  display: flex;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(180deg, rgba(26, 26, 46, 0.8) 0%, rgba(10, 10, 15, 0.8) 100%);
  border: 2px solid #ff2a6d;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(255, 42, 109, 0.2);

  & > li {
    max-width: 80px;
    font-family: 'Press Start 2P', cursive;
    font-size: 0.4rem;
    color: #05d9e8;
    text-shadow: 0 0 3px #05d9e8;
    transition: all 0.3s ease;

    &:hover {
      color: #ff2a6d;
      text-shadow: 0 0 5px #ff2a6d;
    }
  }
`;
