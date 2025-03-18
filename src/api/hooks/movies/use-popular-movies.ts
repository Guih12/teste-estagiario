import { tmdb } from "../../axios"
import { useQuery } from "@tanstack/react-query"

interface useGetPopularMoviesProps {
  page?: number
}

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
}

export interface PageAndMovies {
  page: number;
  movies: Movie[];
}


const useGetPopularMovies = ({ page = 1 }: useGetPopularMoviesProps) => {
  const query = useQuery({
    queryKey: ['popular-movies', page], queryFn: async () => {
      const { data } = await tmdb.get("/movie/popular", { params: { page } })


      const pageAndMovies = {
        page: data.page,
        movies: data.results.map((movie:any): Movie => ({
          id: movie.id,
          title: movie.title,
          release_date: movie.release_date,
          overview: movie.overview,
          poster_path: movie.poster_path,
          vote_average: movie.vote_average,
          genre_ids: movie.genre_ids,
        }))
      };

      if (pageAndMovies.movies.length <= 10) {
        return pageAndMovies;
      }

      const half = Math.ceil(pageAndMovies.movies.length / 2);
      if (page % 2 !== 0) {
        // Se o número de filmes for ímpar, retorna a primeira metade
        pageAndMovies.movies = pageAndMovies.movies.slice(0, half);
        return pageAndMovies;
      } else {
        // Se o número de filmes for par, retorna a segunda metade
        pageAndMovies.movies = pageAndMovies.movies.slice(half);
        return pageAndMovies;
      }
    },
  })
  return query
}

export { useGetPopularMovies }