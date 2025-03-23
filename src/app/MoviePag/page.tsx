"use client";
import { useEffect, useState } from "react";
import { getDetails, getMovie } from "@/lib/api"; 
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Modal } from "@/components/Modal";

export default function Movies() {
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
    setIsLoading(true);
    setError("");

    getMovie() 
      .then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Erro ao carregar filmes. Tente novamente.");
        setIsLoading(false);
      });
  }, []);

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
    <div className="w-full h-full flex justify-center relative">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((popular) => (
          <div
            key={popular.id}
            className="group cursor-pointer"
            onClick={() => openModal(popular.id)}
          >
            <div className="relative w-full h-[380px]">
              <div className="relative w-full h-full shadow-md rounded-xl border-none bg-transparent">
                <Card className="w-full h-full bg-transparent border-none">
                  <CardContent className="flex flex-col items-center p-2 sm:p-4">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${popular.poster_path}`}
                      alt={popular.title}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                    <CardTitle className="text-sm sm:text-lg font-bold text-center mt-4 text-white break-words">
                      {popular.title}
                    </CardTitle>

                  </CardContent>
                </Card>
              </div>

              <div className="absolute inset-0 w-full h-full rounded-xl bg-neutral-950 flex items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Card className="w-full h-full bg-neutral-950 flex flex-col items-center justify-center text-center p-1">
                  <CardContent>
                    <h3 className="text-lg font-bold text-white">
                      Lançamento: {popular.release_date.split("-")[0]}
                    </h3>
                    <p className="text-sm text-gray-300 mt-1 line-clamp-6">
                      {popular.overview}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedMovie && (
        <Modal selectedMovie={selectedMovie} closeModal={closeModal} />
      )}
    </div>
  );
}
