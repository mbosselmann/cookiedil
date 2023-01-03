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
  margin: 30px;
  top: 10%;
  background-color: #fff;
  box-shadow: 0 0 25px lightgray;
  border-radius: 15px;
  padding: 25px;
`;
