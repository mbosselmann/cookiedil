import styled from "styled-components";
import { ReactComponent as Cookie } from "../images/cookie.svg";

export default function CookieButton({ onAdd }) {
  return (
    <Button
      onClick={onAdd}
      type="button"
      aria-label="click to have more cookies"
    >
      <StyledCookie />
    </Button>
  );
}

const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0 100px 10px;
`;

const StyledCookie = styled(Cookie)`
  width: 100%;
  height: auto;
  max-width: 350px;
  max-height: 350px;
  border-radius: 50%;
  box-shadow: 0 0 25px #f48c06;

  &:active {
    box-shadow: 0 0 55px #f48c06;
  }
`;
