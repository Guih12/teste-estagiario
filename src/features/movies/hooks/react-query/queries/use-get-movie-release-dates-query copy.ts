import { MoviesApi } from "@/features/movies/api/movies-api";
import { useSuspenseQuery } from "@tanstack/react-query";

interface Props {
  movieId: number;
}

export function useGetMovieReleaseDatesQuery({ movieId }: Props) {
  return useSuspenseQuery({
    queryFn: () => MoviesApi.getMovieReleaseDates(movieId),
    queryKey: ["movie-release-dates", movieId],
  });
}
