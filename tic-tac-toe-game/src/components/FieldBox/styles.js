import styled, { css } from "styled-components";

export const BoxContainer = styled.div`
  width: 33.3%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    font-size: 8rem;
    font-weight: bolder;

    ${({ playerMark }) =>
      playerMark === "-"
        ? css`
            color: #111;
          `
        : css`
            color: #20acf7;
          `}
    ${({ playerMark }) =>
      playerMark === "O"
        ? css`
            color: red;
          `
        : ""}
  }

  ${({ borderPosition }) =>
    borderPosition === "bottom-right" &&
    css`
      border-bottom: 8px solid grey;
      border-right: 8px solid grey;
    `}

  ${({ borderPosition }) =>
    borderPosition === "bottom" &&
    css`
      border-bottom: 8px solid grey;
    `}

  ${({ borderPosition }) =>
    borderPosition === "top" &&
    css`
      border-top: 8px solid grey;
    `}

  ${({ borderPosition }) =>
    borderPosition === "right" &&
    css`
      border-right: 8px solid grey;
    `}
`;
