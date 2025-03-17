import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { convertMinutesToHours } from "@/lib/utils/convert-minutes-to-hours";
import { formatCurrency } from "@/lib/utils/format-currency";
import Image from "next/image";
import { useGetMovieDetailsByIdQuery } from "../../hooks/react-query/queries/use-get-movie-details-by-id-query";
import { MovieAgeClassification } from "./movie-age-classification";
import { MovieComments } from "./movie-comments";
import { MovieRating } from "./movie-rating";

interface Props {
  movieId: number;
}

export function MovieDetails({ movieId }: Props) {
  const { data: movie } = useGetMovieDetailsByIdQuery({ movieId });

  const profit = movie.revenue - movie.budget;
  const isProfitable = profit > 0;

  return (
    <section className="flex max-w-2/3 flex-col gap-4">
      <article className="flex items-center gap-4">
        <MovieAgeClassification movieId={movieId} />
        <Typography variant="h2">{movie.title}</Typography>
        <Typography variant="lead">
          ({movie.release_date.slice(0, 4)})
        </Typography>
      </article>

      <article className="flex flex-wrap items-center gap-2">
        <Typography variant="p">
          {movie.release_date.split("-").reverse().join("/")}
        </Typography>

        <div className="h-1 w-1 rounded-full bg-white" />

        <Typography variant="p">
          {convertMinutesToHours(movie.runtime)}
        </Typography>

        <div className="h-1 w-1 rounded-full bg-white" />

        <div className="flex gap-3">
          {movie.production_companies.slice(0, 3).map((company) => (
            <div key={company.id} className="flex items-center gap-1.5">
              <Image
                src={`https://flagcdn.com/${company.origin_country.toLowerCase()}.svg`}
                alt={company.origin_country}
                width={30}
                height={20}
                key={company.origin_country}
              />
              <Typography>{company.name}</Typography>
            </div>
          ))}

          {movie.production_companies.length > 3 && (
            <Typography>+{movie.production_companies.length - 3}</Typography>
          )}
        </div>
      </article>

      <MovieRating movieId={movieId} />

      <article>
        <article className="flex gap-2">
          {movie.genres.map((genre) => (
            <Badge key={genre.id}>{genre.name}</Badge>
          ))}
        </article>
      </article>

      <article>
        <Typography variant="h4">Overview</Typography>
        <Typography variant="p">{movie.overview}</Typography>
      </article>

      <article className="flex items-center gap-2">
        <Typography variant="p">
          Budget:{" "}
          <span className="text-red-400">-{formatCurrency(movie.budget)}</span>
        </Typography>

        <div className="h-1 w-1 rounded-full bg-white" />

        <Typography variant="p">
          Revenue:{" "}
          <span className="text-green-400">
            +{formatCurrency(movie.revenue)}
          </span>
        </Typography>

        <div className="h-1 w-1 rounded-full bg-white" />

        <Typography variant="p">
          Profit:{" "}
          <span
            className={`${isProfitable ? "text-green-400" : "text-red-400"}`}
          >
            {isProfitable ? "+" : "-"}
            {formatCurrency(profit)}
          </span>
        </Typography>
      </article>

      <MovieComments movieId={movieId} />
    </section>
  );
}
