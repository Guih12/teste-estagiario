import { MovieList } from "../components/ui/movie-list";
import { searchParams } from "./types/SearchParams";

interface HomeProps{
  searchParams: searchParams
}


export default function Home({searchParams}: HomeProps) {
  return (
    <div className="items-center justify-items-center gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <MovieList params={searchParams}/>
      
    </div>
  );
}
