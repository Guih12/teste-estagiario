import axios from "axios";

const API_KEY = ""; 
const BASE_URL = "https://api.themoviedb.org/3";

// Buscar filmes populares
export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=pt-BR`);
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes populares", error);
    return [];
  }
};

// Buscar detalhes de um filme específico
export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar detalhes do filme", error);
    return null;
  }
};

export const fetchMovieCertification = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/release_dates?api_key=${API_KEY}`);
    const releases = response.data.results;
    // Busca a classificação do Brasil
    const brazilRelease = releases.find((release) => release.iso_3166_1 === "BR");
    if (brazilRelease && brazilRelease.release_dates.length > 0) {
      return brazilRelease.release_dates[0].certification || "Livre";
    }
    return "Livre"; // Caso não encontre a classificação do Brasil
  } catch (error) {
    console.error("Erro ao buscar classificação indicativa", error);
    return "Livre";
  }
};