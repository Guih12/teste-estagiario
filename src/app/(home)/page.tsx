"use client"
import { useGetPopularMovies } from "@/api/hooks/use-popular-movies";
import { Movies } from "@/app/(home)/movies";
import { Button } from "@/components/ui/button";
import { usePagination } from "@/hooks/usePagination";
import { Skeleton } from "@/components/ui/skeleton";
import { VerticalPagination } from "@/components/vertical-pagination";

export default function Home() {

  const [page, setPage] = usePagination()
  const { data: movies, isLoading, error } = useGetPopularMovies({ page: page });
  const moviesSkeleton = Array.from({ length: 4 }).map((_, index) => index);

  return (
    <>
      <VerticalPagination className="fixed right-2 top-1/2 transform -translate-y-1/2 z-50 bg-pallete-white/70 backdrop-blur-sm rounded-2xl" />
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {moviesSkeleton.map((index) => (
            <Skeleton key={index} className="h-[600px] w-[290px]" />
          ))}
        </div>
      )}

      {!isLoading && (
        <div>
          <Movies movies={movies?.movies} />
        </div>
      )}

    </>
  )
}
