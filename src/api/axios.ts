import axios from "axios";

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const tmdb = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TMDB_API_KEY}`,
  },
  params: {
    language: "pt-BR"
  }
});

export { tmdb }