import { useState, useEffect } from "react";
import { getFilmsById } from "../../../api/tvMovieDb";
import Style from "./Cast.module.scss";

function Cast({
  match: {
    params: { movieId },
  },
}) {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getFilmsById(movieId, "cast").then(({ cast }) => setCredits(cast));
  }, [movieId]);

  return (
    <>
      <ul className={Style.cast__list}>
        {credits &&
          credits.length > 0 &&
          credits.map((actor) => (
            <li key={actor?.id} className={Style.cast__item}>
              {actor.profile_path ? (
                <img
                  src={"https://image.tmdb.org/t/p/w300" + actor?.profile_path}
                  alt={actor?.original_name}
                  width="100px"
                />
              ) : null}

              <div>
                <p className={Style.cast__description}>
                  <span className={Style.cast__lebel}>Character:</span>{" "}
                  {actor?.character}
                </p>
                <p className={Style.cast__description}>
                  <span className={Style.cast__lebel}>Name:</span>{" "}
                  {actor?.original_name}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Cast;
