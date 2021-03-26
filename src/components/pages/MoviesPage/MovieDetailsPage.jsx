/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, Suspense } from "react";
import {
  NavLink,
  useHistory,
  useLocation,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
import { navDetails } from "../../../utils/navigation";
import { getFilmsById } from "../../../api/tvMovieDb";
import Style from "./MovieDetailsPage.module.scss";

function MoviesDetailsPage() {
  const [movie, setMovie] = useState({});
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

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
    getFilmsById(match.params.movieId).then((data) => {
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
        <>
          <NavLink
            to={{
              pathname: `${match.url}/cast`,
              state: location.state ? location.state : null,
            }}
            className={Style.link}
            activeClassName={Style.link__active}
          >
            Cast
          </NavLink>
          <NavLink
            to={{
              pathname: `${match.url}/reviews`,
              state: location.state ? location.state : null,
            }}
            className={Style.link}
            activeClassName={Style.link__active}
          >
            Reviews
          </NavLink>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {navDetails.map(({ path, component, exact }) => (
                <Route
                  key={path}
                  path={path}
                  exact={exact}
                  component={component}
                />
              ))}
            </Switch>
          </Suspense>
        </>
      </div>
    </>
  );
}

export default MoviesDetailsPage;
