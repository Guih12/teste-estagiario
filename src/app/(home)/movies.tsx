import { CardMovie } from "@/components/card-movie";
import { VerticalPagination } from "@/components/vertical-pagination";


interface MoviesProps {
  movies: [];
}

const Movies = ({ movies }: MoviesProps) => {
  // console.log(movies);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.map((movie, index) => (
          <CardMovie key={index} movie={movie} />
        ))}
      </div>
    </>
  )
}

export { Movies }