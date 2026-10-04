import styled from "styled-components";

export const Main = styled.div`
  min-height: 100vh;
  background-color: black;
  color: white;
`;

export const Title = styled.h2`
  text-align: left;
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 5px;
`;

export const Movie = styled.div`
  display: grid;
  grid-template-columns: 550px 1fr;
  grid-template-rows: repeat(4, auto);
  padding-top: 50px;
`;

export const Poster = styled.div`
  grid-column: 1/ 2;
  grid-row: 1/ 5;
  justify-content: center;
  align-items: center;
  display: flex;

  img {
    width: 60%;
    aspect-ratio: 2/3;
    border-radius: 8px;
  }
`;

export const MovieInfo = styled.div`
  border-bottom: 2px solid #444;
  padding-bottom: 30px;
  width: 80%;
`;

export const Release = styled.span`
  text-align: center;
  font-size: 25px;
`;

export const Overview = styled.span`
  text-align: left;
  line-height: 1.8;
  word-break: keep-all;
  font-size: 16px;
  padding: 30px 0;
  border-bottom: 2px solid #444;
  width: 80%;
`;

export const OverviewTitle = styled.span`
  text-align: left;
  font-size: 20px;
`;

export const Runtime = styled.span`
  text-align: center;
  font-size: 25px;
`;

export const Average = styled.span`
  text-align: center;
  font-size: 25px;
`;

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #444;
  padding: 20px 0;
`;

export const CastImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
`;

export const Cast = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  padding-top: 30px;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    padding-bottom: 10px;
  }
`;

export const CastName = styled.span`
  color: black;
  text-align: left;
  font-weight: 600;
  width: 100%;
  padding-left: 10px;
`;

export const Character = styled.span`
  color: #444;
  font-size: 13px;
  text-align: left;
  width: 100%;
  padding-left: 10px;
`;
