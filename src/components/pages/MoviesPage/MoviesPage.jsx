import { useState } from "react";
import { getFilms } from "../../../api/tvMovieDb";
import { NavLink } from "react-router-dom";
import Style from "./MoviesPage.module.scss";

function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMoveis] = useState([]);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

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
                to={"/movies/" + String(movie.id)}
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
