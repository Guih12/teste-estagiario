"use client";
import { If } from "@/components/if";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Movie } from "@/features/movies/types/movie";
import { Ban } from "lucide-react";

interface Props {
  movie: Movie;
}

export function MovieCard({ movie }: Props) {
  return (
    <article className="group xs:h-[400px] aspect-[1/2.5] h-[550px] w-full cursor-pointer">
      <div className="relative h-full w-full transform rounded-none shadow-xl transition-transform duration-300 ease-in-out">
        <div
          className="absolute inset-0 h-full w-full rounded-none bg-cover bg-center shadow-xl shadow-black/40"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
          }}
        />

        <div className="absolute inset-0 h-full w-full rounded-none bg-black/90 px-4 text-center text-slate-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100">
          <div className="flex min-h-full flex-col items-center justify-center gap-5">
            <section className="flex flex-col items-center gap-3">
              <h1 className="text-3xl font-bold">{movie.title}</h1>
              <If condition={movie.adult}>
                <Badge variant="destructive">
                  <Ban />
                  Adult content
                </Badge>
              </If>
            </section>

            <p className="text line-clamp-4">{movie.overview}</p>

            <Badge>{movie.release_date.slice(0, 4)}</Badge>

            <Button size="sm" variant="secondary" className="cursor-pointer">
              Read more
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
