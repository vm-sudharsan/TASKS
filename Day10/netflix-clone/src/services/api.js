import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // The base URL for TMDB
});

export default instance;
