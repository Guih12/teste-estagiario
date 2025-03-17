"use client";
import { Button } from "@/components/ui/button";
import { MovieDetails } from "@/features/movies/components/movie-details/movie-details";
import { MovieDetailsSidebar } from "@/features/movies/components/movie-details/movie-details-sidebar";
import { configuration } from "@/lib/config/configuration";
import { SkipBack } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function MoviePage() {
  const { movieId } = useParams<{ movieId: string }>();

  if (!movieId) return <>Produto não encontrado</>;

  return (
    <div className="p flex flex-col gap-4">
      <Button className="md:self-start" variant="ghost" asChild>
        <Link href={configuration.paths.home}>
          <SkipBack />
          Return to movies
        </Link>
      </Button>

      <div className="flex flex-col gap-8 md:flex-row">
        <MovieDetailsSidebar movieId={+movieId} />
        <MovieDetails movieId={+movieId} />
      </div>
    </div>
  );
}
