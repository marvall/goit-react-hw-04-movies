import axios from "axios";
const API_KEY = "da386946e379f32c67e71a3221783db6";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
export const getFilms = (id) => {
  if (!id) {
    return axios
      .get(`/trending/movie/day?api_key=${API_KEY}`)
      .then(({ data }) => data);
  }
};