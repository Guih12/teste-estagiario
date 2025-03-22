"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { searchMovies, getDetails } from "@/lib/api";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Modal } from "@/components/Modal";

export default function MovieList() {
  const searchParams = useSearchParams() ?? new URLSearchParams();
  const query = searchParams.get("query") || "";
  const [movies, setMovies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<{
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    overview: string;
    genres: { id: number; name: string }[];
    runtime: number;
    vote_average: number;
    adult: boolean;
  } | null>(null);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      setError("");

      searchMovies(query)
        .then((data) => {
          setMovies(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError("Erro ao buscar filmes. Tente novamente.");
          setIsLoading(false);
        });
    } else {
      setMovies([]);
    }
  }, [query]);

  const openModal = async (movieId: number) => {
    try {
      const movieDetails = await getDetails(movieId);
      setSelectedMovie(movieDetails);
      setIsModalOpen(true);
    } catch (err) {
      console.error("Erro ao buscar detalhes do filme:", err);
      setError("Erro ao carregar detalhes do filme.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div className="w-full h-full flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold text-white mb-4 text-center mt-25">Resultados da busca: {query}</h1>

      {isLoading ? (
        <div className="text-white bg-[#141414]">Carregando...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : movies.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="group cursor-pointer"
              onClick={() => openModal(movie.id)}
            >
              <div className="relative w-full h-[380px]">
                <div className="relative w-full h-full shadow-md rounded-xl border-none bg-transparent">
                  <Card className="w-full h-full bg-transparent border-none">
                    <CardContent className="flex flex-col items-center p-2 sm:p-4">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                      />
                      <CardTitle className="text-sm sm:text-lg font-bold text-center mt-4 text-white break-words">
                        {movie.title}
                      </CardTitle>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute inset-0 w-full h-full rounded-xl bg-neutral-950 flex items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Card className="w-full h-full bg-neutral-950 flex flex-col items-center justify-center text-center p-1">
                    <CardContent>
                      <h3 className="text-lg font-bold text-white">
                        Lançamento: {movie.release_date.split("-")[0]}
                      </h3>
                      <p className="text-sm text-gray-300 mt-1 line-clamp-6">
                        {movie.overview}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : query ? (
        <div className="text-white">Nenhum filme encontrado.</div>
      ) : (
        <div className="text-white">Digite algo para buscar filmes.</div>
      )}

      {isModalOpen && selectedMovie && (
        <Modal selectedMovie={selectedMovie} closeModal={closeModal} />
      )}
    </div>
  );
}