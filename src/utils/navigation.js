import { lazy } from "react";

const HomePage = lazy(() =>
  import(
    "../components/pages/HomePage/HomePage" /* webpackChunkName: "home-page" */
  )
);
const MoviesPage = lazy(() =>
  import(
    "../components/pages/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */
  )
);
const MoviesDetailsPage = lazy(() =>
  import(
    "../components/pages/MoviesPage/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);
const Cast = lazy(() =>
  import("../components/pages/MoviesPage/Cast" /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import(
    "../components/pages/MoviesPage/Reviews" /* webpackChunkName: "reviews" */
  )
);
// eslint-disable-next-line import/no-anonymous-default-export
export const navApp = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/movies/:movieId",
    component: MoviesDetailsPage,
    exact: false,
  },
  {
    path: "/movies",
    component: MoviesPage,
    exact: true,
  },
];

export const navDetails = [
  {
    path: "/movies/:movieId/cast",
    component: Cast,
    exact: false,
  },
  {
    path: "/movies/:movieId/reviews",
    component: Reviews,
    exact: false,
  },
];
