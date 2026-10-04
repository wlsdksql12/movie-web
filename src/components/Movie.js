import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as S from "../css/Movie.styled";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <S.Moive>
      <S.PosterBox>
        <Link to={`/movie/${id}`}>
          <img src={coverImg} />
        </Link>
      </S.PosterBox>
      <S.Title>
        <S.MovieLink to={`/movie/${id}`}>{title}</S.MovieLink>
      </S.Title>
    </S.Moive>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
