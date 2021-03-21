import { useState, useEffect } from "react";
import { getFilmsById } from "../../../api/tvMovieDb";
import Style from "./Review.module.scss";

function Reviews({
  match: {
    params: { movieId },
  },
}) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getFilmsById(movieId, "reviews").then(({ results }) => {
      console.log(results);

      setReviews(results);
    });
  }, [movieId]);
  return (
    <>
      <ul className={Style.reviews__list}>
        {reviews
          ? reviews.length > 0
            ? reviews.map((review) => (
                <li key={review?.id} className={Style.reviews__item}>
                  <div className={Style.reviews__wrapper}>
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w300" +
                        review?.author_details.avatar_path
                      }
                      alt={review?.author}
                      width="80px"
                    />
                    <p className={Style.reviews__description}>
                      <span className={Style.reviews__lebel}>NickName:</span>{" "}
                      {review?.author}
                    </p>
                  </div>
                  <p className={Style.reviews__description}>
                    <span className={Style.reviews__lebel}>Review:</span>{" "}
                    {review?.content}
                  </p>
                </li>
              ))
            : "We don't have any reviews for this movie"
          : null}
      </ul>
    </>
  );
}

export default Reviews;
