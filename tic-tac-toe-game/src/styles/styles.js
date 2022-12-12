import styled, { css } from "styled-components";

export const BoxPlayTime = styled.h2`
  width: 100%;
  text-align: center;
  padding: 2%;
  z-index: 1;
  font-weight: normal;
  font-variant: small-caps;
  margin-bottom: 50px;

  ${({ player }) =>
    player === "X"
      ? css`
          color: #20acf7;
          border: 2px solid #20acf7;
        `
      : css`
          color: red;
          border: 2px solid red;
        `}
`;

export const SuccessScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
  height: 100vh;


  h1 {
    width: 50%;
    text-align: center;
    font-size: 5rem;
    color: #20acf7;

    ${({ winner }) =>
    winner === "X"
      ? css`
          color: #20acf7;
        `
      : css`
          color: red;
        `}
  }
`