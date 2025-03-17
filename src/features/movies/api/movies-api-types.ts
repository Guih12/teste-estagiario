import { Movie } from "@/features/movies/types/movie";
import { MovieDetails } from "../types/movie-details";

export interface GetMoviesListByPageResponseData {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export type GetMovieDetailsByIdResponseData = MovieDetails;

export interface GetMovieReleaseDatesResponseData {
  id: number;
  results: {
    iso_3166_1: string;
    release_dates: {
      certification: string;
      descriptors: string[];
      iso_639_1: string;
      note: string;
      release_date: string;
      type: number;
    }[];
  }[];
}

export interface PostMovieCommentRequestData {
  username: string;
  comment: string;
  movieId: number;
}
