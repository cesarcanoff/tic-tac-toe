import React from "react";
import { BoxContainer } from "./styles";

export const FieldBox = ({ borderPosition, onClick, playerMark }) => {
  return (
    <BoxContainer
      borderPosition={borderPosition}
      playerMark={playerMark}
      onClick={onClick}
    >
      <p>{playerMark}</p>
    </BoxContainer>
  );
};
