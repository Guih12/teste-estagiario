import { Star, StarHalf } from "lucide-react";
import { useGetMovieDetailsByIdQuery } from "../../hooks/react-query/queries/use-get-movie-details-by-id-query";

interface Props {
  movieId: number;
}

export function MovieRating({ movieId }: Props) {
  const { data: movieDetails } = useGetMovieDetailsByIdQuery({ movieId });
  const starProps = {
    fill: "#e67e22",
    stroke: "#e67e22",
    size: 24,
  };

  return (
    <div className="flex flex-col items-center gap-2 md:flex-row md:gap-0">
      <div className="flex items-center">
        {movieDetails?.vote_average && (
          <>
            {[...Array(5)].map((_, index) => {
              const rating = movieDetails.vote_average / 2;
              return (
                <div key={index} className="mr-1">
                  {rating >= index + 1 ? (
                    <Star {...starProps} />
                  ) : rating >= index + 0.5 ? (
                    <StarHalf {...starProps} />
                  ) : (
                    <Star size={24} stroke="#e67e22" />
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>

      <div className="md:ml-2">
        {movieDetails?.vote_average}/10.0 ({movieDetails?.vote_count} votes)
      </div>
    </div>
  );
}
