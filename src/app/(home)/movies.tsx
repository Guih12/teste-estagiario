import { CardMovie } from "@/components/card-movie";

import { Movie } from "@/api/hooks/movies/use-popular-movies";

interface MoviesProps {
  movies: Movie[];
}



const Movies = ({ movies }: MoviesProps) => {
  // console.log(movies);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.map((movie:Movie, index) => (
          <CardMovie key={index} movie={movie} />
        ))}
      </div>
    </>
  )
}

export { Movies }