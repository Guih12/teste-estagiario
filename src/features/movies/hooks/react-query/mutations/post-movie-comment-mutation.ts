import { MoviesApi } from "@/features/movies/api/movies-api";
import { useMutation } from "@tanstack/react-query";

export function usePostMovieCommentMutation() {
  return useMutation({
    mutationFn: MoviesApi.postMovieComment,
  });
}
