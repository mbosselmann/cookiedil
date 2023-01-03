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
`;

const List = styled.ul`
  list-style: none;
  text-align: center;
  padding: 15px 10px;
  margin: 0 0 8px;
  display: flex;
  justify-content: center;
  gap: 5px;

  & > li {
    max-width: 80px;
  }
`;
