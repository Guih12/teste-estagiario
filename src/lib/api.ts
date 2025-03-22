import axios from "axios";

const ACESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACESS_TOKEN}`,
  },
});

export const getPopular = async () => {
  try{
    const response = await api.get("/trending/movie/day?language=en-US");
    return response.data
  }catch(error){
    console.error("Erro ao buscar filmes Populares", error);
    return [];
  }
}

export const getDetails = async (movieId: number) => {
  try {
    const response = await api.get(`/movie/${movieId}?language=en-US`);
    return response.data; 
  } catch (error) {
    console.error("Erro ao buscar detalhes do filme:", error);
    return []; 
  }
};

export const getRated = async() => {
  try{
    const response = await api.get("/movie/top_rated?language=en-US&page=1");
    return response.data
  }catch(error){
    console.error("Erro ao buscar filmes mais vistos", error);
    return [];
  }
}

export const getMovie = async() => {
  try{
    const response = await api.get("/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=revenue.desc");
    return response.data
  }catch(error){
    console.error("Erro ao buscar filmes", error);
    return [];
  }
}

export const getupComing = async() => {
  try{
    const response = await api.get("/movie/upcoming?language=en-US&page=1");
    return response.data
  }catch(error){
    console.error("Erro ao buscar filmes em breve", error);
    return [];
  }
}

export const searchMovies = async (query: string) => {
  try {
    const response = await api.get("/search/movie", {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    return [];
  }
};


export default api;
