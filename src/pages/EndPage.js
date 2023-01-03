import Title from "../components/Title";
import { Info } from "../components/Info.js";
import { Button } from "../components/Button.js";
import { CookiedilHead } from "../components/CookiedilHead.js";

export default function EndPage({
  cookies,
  seconds,
  amountOfHiredGrannies,
  onReset
}) {
  return (
    <>
      <Title />
      <Info>
        <h2>Yay! You did it!</h2>
        <CookiedilHead />
        <p>
          You baked {cookies} cookies in {seconds} seconds with the help of
          {amountOfHiredGrannies} grannies.
        </p>
        <Button type="button" onClick={onReset}>
          Back to Home
        </Button>
      </Info>
    </>
  );
}
