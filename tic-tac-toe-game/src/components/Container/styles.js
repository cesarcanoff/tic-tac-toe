import styled from "styled-components";

export const ContainerBox = styled.main`
  width: 400px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 400px;
    height: 400px;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
    height: 300px;
  }
`;
