import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import * as S from "../css/Home.styled";

function Home() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_PATH = process.env.REACT_APP_BASE_PATH;
  const POSTER_URL = process.env.REACT_APP_POSTER_URL;
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko-KR`,
      )
    ).json();
    console.log(json.results);
    setMovies(json.results);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <S.main>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <S.Title>상영중인 영화</S.Title>
          <S.Movies>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={`${POSTER_URL}${movie.poster_path}`}
                title={movie.title}
              />
            ))}
          </S.Movies>
        </>
      )}
    </S.main>
  );
}

export default Home;
