import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getFilmsById } from "../../../api/tvMovieDb";

function MoviesDetailsPage({
  match: {
    params: { movieId },
  },
}) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    getFilmsById(movieId).then((data) => {
      setMovie(data);
      console.log(data);
    });
  }, []);
  return (
    <>
      <button>Go back</button>
      <div>Deteils</div>
      <img
        src={"https://image.tmdb.org/t/p/w300" + movie?.poster_path}
        alt={movie?.title}
      />
      <h3>{movie?.original_title}</h3>
      <p>
        <span>User Score:</span> {movie?.vote_average * 10 + "%"}
      </p>
      <p>
        <span>Overview:</span> {movie?.overview}
      </p>
      <p>
        <span>Genres:</span>{" "}
        {movie?.genres ? movie.genres.map((genr) => `${genr.name}, `) : null}
      </p>
      <div>
        <p>Additionals Information</p>
        <NavLink to={`/cast`}>Cast</NavLink>
        <NavLink to={"/reviews"}>Reviews</NavLink>
      </div>
    </>
  );
}

export default MoviesDetailsPage;
