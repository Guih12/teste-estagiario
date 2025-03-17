"use client";
import { useSearchParamsManager } from "@/hooks/use-search-params";
import { useGetMoviesListByPageQuery } from "../hooks/react-query/queries/use-get-movies-list-by-page-query";
import { MovieCard } from "./movie-card";

export function MoviesDisplay() {
  const { params } = useSearchParamsManager();
  const { data: moviesData } = useGetMoviesListByPageQuery({
    page: Number(params.get("page")) ?? 1,
  });

  return (
    <section className="xs:grid-cols-2 grid w-full grid-cols-1 place-items-center gap-0 sm:px-0 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7">
      {moviesData?.results.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </section>
  );
}
