import { MoviesApi } from "@/features/movies/api/movies-api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

interface Props {
  page: number;
}

export function useGetMoviesListByPageQuery({ page = 1 }: Props) {
  return useQuery({
    queryFn: () => MoviesApi.getMoviesListByPage(page),
    queryKey: ["movies-list", page],
    placeholderData: keepPreviousData,
  });
}
