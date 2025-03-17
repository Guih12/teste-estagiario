import { Typography } from "@/components/ui/typography";
import { MoviesDisplay } from "@/features/movies/components/movies-display";
import { MoviesPagination } from "@/features/movies/components/movies-pagination";

export default function Home() {
  return (
    <main className="mx-10 my-8 flex flex-col gap-6">
      <section className="flex flex-col items-center justify-between md:flex-row">
        <Typography variant="h2" className="text-white">
          Movies list
        </Typography>

        <MoviesPagination />
      </section>

      <MoviesDisplay />
    </main>
  );
}
