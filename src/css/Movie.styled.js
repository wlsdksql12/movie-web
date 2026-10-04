import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const Moive = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const PosterBox = styled.div`
  width: 80%;
  aspect-ratio: 2/3;
  border: 1px solid white;
  border-radius: 8px;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  padding-top: 10px;
`;
