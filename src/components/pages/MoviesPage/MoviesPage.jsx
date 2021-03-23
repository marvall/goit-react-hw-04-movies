import { useState } from "react";
import { getFilms } from "../../../api/tvMovieDb";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import Style from "./MoviesPage.module.scss";
const queryString = require("query-string");

function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState(
    location.search ? queryString.parse(location.search).query : ""
  );
  const [movies, setMoveis] = useState(
    location.state ? location.state.movies : []
  );

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push({
      ...location,
      search: `?query=${searchQuery}`,
    });
    getFilms(searchQuery).then(({ results }) => {
      setMoveis(results);
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={Style.form__movies}>
        <input
          name="serach"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Please, Set your query"
          className={Style.input__movies}
        />
        <button
          type="submit"
          onSubmit={handleSubmit}
          className={Style.button__movies}
        >
          Search
        </button>
      </form>
      <ul>
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => (
            <li key={movie.id}>
              <NavLink
                to={{
                  pathname: `/movies/${String(movie.id)}`,
                  state: { searchQuery, movies },
                }}
                className={Style.movie__list_item}
              >
                {movie.original_title}
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
}

export default MoviesPage;
