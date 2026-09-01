import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://movies-api.accel.li/api/v2/movie_details.json?movie_id=${id}`,
      )
    ).json();
    setMovieDetail(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movieDetail);
  return <h1>Detail</h1>;
}

export default Detail;
