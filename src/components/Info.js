import styled from "styled-components";

export const Info = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 0 0 15px;
  background: rgb(255, 255, 255, 20%);
  text-align: center;
  font-size: 1.2rem;

  & > * {
    margin: 0;
  }
`;
