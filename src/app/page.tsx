import { Typography } from "@/components/ui/typography";
import { MoviesDisplay } from "@/features/movies/components/movies-list/movies-display";
import { MoviesPagination } from "@/features/movies/components/movies-list/movies-pagination";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-between md:flex-row">
        <Typography variant="h2" className="text-white">
          Movies list
        </Typography>

        <MoviesPagination />
      </section>

      <MoviesDisplay />
    </>
  );
}
