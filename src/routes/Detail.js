import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "../css/Detail.styled";

function Detail() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_PATH = process.env.REACT_APP_BASE_PATH;
  const POSTER_URL = process.env.REACT_APP_POSTER_URL;
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [movieRelease, setMovieRelease] = useState("");
  const [movieCast, setMovieCast] = useState([]);

  // 영화 디테일
  const getMovie = async () => {
    const json = await (
      await fetch(
        `${BASE_PATH}/movie/${id}?api_key=${API_KEY}&language=ko-KR&append_to_response=credits`,
      )
    ).json();
    setMovieDetail(json);
    setMovieCast(json.credits?.cast?.slice(0, 5));
  };

  // 영화 한국 개봉일
  const getMovieRelease = async () => {
    const json = await (
      await fetch(`${BASE_PATH}/movie/${id}/release_dates?api_key=${API_KEY}`)
    ).json();
    const krRelease = json.results.filter((item) => item.iso_3166_1 === "KR");
    setMovieRelease(krRelease[0]?.release_dates[0]?.release_date.slice(0, 10));
  };

  useEffect(() => {
    getMovie();
    getMovieRelease();
  }, []);

  return (
    <S.Main>
      <S.Movie>
        <S.Poster>
          <img src={`${POSTER_URL}${movieDetail.poster_path}`} />
        </S.Poster>
        <S.Title>{movieDetail.title}</S.Title>
        <S.MovieInfo>
          {movieRelease} 개봉 |{" "}
          {movieDetail.genres?.map((itme) => itme.name).join(",")} |{" "}
          {movieDetail.runtime}분 | ⭐ {movieDetail.vote_average?.toFixed(1)} /
          10
        </S.MovieInfo>
        <S.Overview>
          {movieDetail.overview?.split(". ").map(
            (sentence, index) =>
              // 문장이 비어있지 않을 때만 렌더링 (마지막 마침표 뒤 빈 문자열 방지)
              sentence && (
                <span key={index}>
                  {sentence}.
                  <br />
                </span>
              ),
          )}
        </S.Overview>
        <S.Cast>
          {movieCast?.map((item) => (
            <li key={item.id}>
              <S.CastImg src={`${POSTER_URL}${item.profile_path}`} />
              <S.CastName>{item.name}</S.CastName>
              <S.Character>{item.character}</S.Character>
            </li>
          ))}
        </S.Cast>
      </S.Movie>
    </S.Main>
  );
}

export default Detail;
