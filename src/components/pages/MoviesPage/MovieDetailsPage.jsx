/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getFilmsById } from "../../../api/tvMovieDb";
import Style from "./MovieDetailsPage.module.scss";

function MoviesDetailsPage({
  history,
  location,
  match: {
    params: { movieId },
    url,
  },
}) {
  const [movie, setMovie] = useState({});
  const handleButtonClick = () => {
    if (location.state) {
      history.push({
        pathname: "/movies",
        search: location.state.searchQuery,
        state: { movies: location.state.movies },
      });
    } else {
      history.push({ pathname: "/" });
    }
  };

  useEffect(() => {
    getFilmsById(movieId).then((data) => {
      setMovie(data);
    });
  }, []);
  return (
    <>
      <button onClick={handleButtonClick} className={Style.go_back_button}>
        Go back
      </button>
      <div className={Style.details__page_wrapper}>
        {movie.poster_path ? (
          <img
            src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
            alt={movie?.title}
          />
        ) : null}
        <div className={Style.details__page_descriptions}>
          <h3 className={Style.title}>{movie?.original_title}</h3>
          <p>
            <span className={Style.label__description}>User Score:</span>{" "}
            {movie?.vote_average * 10 + "%"}
          </p>
          <p>
            <span className={Style.label__description}>Overview:</span>{" "}
            {movie?.overview}
          </p>
          <p>
            <span className={Style.label__description}>Genres:</span>{" "}
            {movie?.genres
              ? movie.genres.map((genr) => `${genr.name}, `)
              : null}
          </p>
        </div>
      </div>
      <p className={`${Style.label__description} ${Style.additional}`}>
        Additionals Information
      </p>
      <div className={Style.nav__menu}>
        <NavLink
          to={`${url}/cast`}
          className={Style.link}
          activeClassName={Style.link__active}
        >
          Cast
        </NavLink>
        <NavLink
          to={`${url}/reviews`}
          className={Style.link}
          activeClassName={Style.link__active}
        >
          Reviews
        </NavLink>
      </div>
    </>
  );
}

export default MoviesDetailsPage;
