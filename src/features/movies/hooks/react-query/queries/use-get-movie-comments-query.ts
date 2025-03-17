import { MoviesApi } from "@/features/movies/api/movies-api";
import { useSuspenseQuery } from "@tanstack/react-query";

interface Props {
  movieId: number;
}

export function useGetMovieCommentsQuery({ movieId }: Props) {
  return useSuspenseQuery({
    queryFn: () => MoviesApi.getMovieComments(movieId),
    queryKey: ["movie-comments", movieId],
  });
}
