"use client";
import { If } from "@/components/if";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useGetMovieDetailsByIdQuery } from "../../hooks/react-query/queries/use-get-movie-details-by-id-query";

interface Props {
  movieId: number;
}

export function MovieDetailsSidebar({ movieId }: Props) {
  const { data: movie } = useGetMovieDetailsByIdQuery({ movieId });

  return (
    <aside className="flex flex-col items-center gap-2">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        width={366}
        height={700}
      />

      <If condition={movie.homepage}>
        <Button variant="secondary" asChild>
          <Link href={movie.homepage}>Go to homepage</Link>
        </Button>
      </If>
    </aside>
  );
}
