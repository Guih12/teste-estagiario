import { MovieList } from "../components/ui/movie-list";
import { params } from "./types/SearchParams";


export default async function Home({searchParams}: params) {
    const {page, pageSize} = await searchParams

  return (
    <div className="items-center justify-items-center gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <MovieList page={page} pageSize={pageSize}/>
      
    </div>
  );
}
