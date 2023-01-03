import styled from "styled-components";

export default function Title() {
  return (
    <Wrapper>
      <span role="img" aria-label="cookie">
        🍪
      </span>
      Cookie Clicker
      <span role="img" aria-label="cookie">
        🍪
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.h1`
  text-align: center;
  margin: 0;
  padding: 15px 0 10px;
  width: 100%;
`;
