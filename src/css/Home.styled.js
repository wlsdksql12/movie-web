import styled from "styled-components";

export const main = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  width: 100%;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  padding: 30px 0px;
`;

export const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  padding-bottom: 30px;
`;
