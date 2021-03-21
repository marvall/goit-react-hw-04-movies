import axios from "axios";
const API_KEY = "da386946e379f32c67e71a3221783db6";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
export const getFilms = (query) => {
  if (!query) {
    return axios
      .get(`/trending/movie/day?api_key=${API_KEY}`)
      .then(({ data }) => data);
  } else {
    return axios
      .get(`search/movie?api_key=${API_KEY}&query=${query}&page=1`)
      .then(({ data }) => data);
  }
};
export const getFilmsById = (id, param) => {
  switch (param) {
    case "reviews":
      return axios
        .get(`/movie/${id}/reviews?api_key=${API_KEY}`)
        .then(({ data }) => data);
    case "cast":
      return axios
        .get(`/movie/${id}/credits?api_key=${API_KEY}`)
        .then(({ data }) => data);

    default:
      return axios
        .get(`/movie/${id}?api_key=${API_KEY}`)
        .then(({ data }) => data);
  }
};
