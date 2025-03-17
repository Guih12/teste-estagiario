import { Movie } from "@/features/movies/types/movie";

export interface GetMoviesListByPage {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
