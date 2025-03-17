import { MoviesApi } from "@/features/movies/api/movies-api";
import { useSuspenseQuery } from "@tanstack/react-query";

interface Props {
  movieId: number;
}

export function useGetMovieDetailsByIdQuery({ movieId }: Props) {
  return useSuspenseQuery({
    queryFn: () => MoviesApi.getMovieDetailsById(movieId),
    queryKey: ["movie-details", movieId],
  });
}
