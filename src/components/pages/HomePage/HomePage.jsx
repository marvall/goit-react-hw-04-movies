import { getFilms } from "../../../api/tvMovieDb";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  const [movies, setMoveis] = useState([]);

  useEffect(() => {
    getFilms().then(({ results }) => setMoveis(results));
  }, []);

  return (
    <>
      <h2>Tranding Today</h2>
      <ul>
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => (
            <li key={movie.id}>
              <NavLink to={"/movies/" + String(movie.id)}>
                {movie.original_title}
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
}

export default HomePage;
