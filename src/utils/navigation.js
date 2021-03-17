import HomePage from "../components/pages/HomePage/HomePage";
import MoviesPage from "../components/pages/MoviesPage/MoviesPage";
import MoviesDetailsPage from "../components/pages/MoviesPage/MovieDetailsPage";
import Cast from "../components/pages/MoviesPage/Cast";
import Reviews from "../components/pages/MoviesPage/Reviews";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/movies",
    component: MoviesPage,
    exact: true,
  },
  {
    path: "/movies/:movieId",
    component: MoviesDetailsPage,
    exact: false,
  },
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
