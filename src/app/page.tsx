import { MovieList } from "./components/movie-list";


export default function Home() {
  return (
    <div className="items-center justify-items-center gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <MovieList/>
    </div>
  );
}
