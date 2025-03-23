"use client";
import { useEffect, useState } from "react";
import { getupComing, getDetails } from "@/lib/api";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Modal } from "@/components/Modal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function UpComing() {
  const [error, setError] = useState("");
  const [populars, setPopular] = useState<{
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    overview: string;
  }[]>([]);
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
    getupComing()
      .then((data) => {
        if (data && Array.isArray(data.results)) {
          setPopular(data.results);
        } else {
          setError("A API não retornou uma lista válida.");
        }
      })
      .catch((err) => {
        console.error("Erro ao buscar os em breve:", err);
        setError("Erro ao carregar filmes.");
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
    <div className="relative">
      <Carousel opts={{ align: "start" }} className="w-full h-full flex justify-center relative overflow-hidden">
        <CarouselContent className="gap-4">
          {populars.map((popular) => (
            <CarouselItem
              key={popular.id}
              className="basis-4/5 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 group cursor-pointer"
              onClick={() => openModal(popular.id)}
            >
              <div className="relative w-[250px] h-[380px]">
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
            </CarouselItem>
          ))}
        </CarouselContent>

        {isModalOpen && selectedMovie && (
          <Modal selectedMovie={selectedMovie} closeModal={closeModal} />
        )}


        <div className="absolute inset-y-0 left-12 flex items-center justify-start px-2">
          <CarouselPrevious className="text-black bg-[#E1DDE4] rounded-full p-2" />
        </div>
        <div className="absolute inset-y-0 right-12 flex items-center justify-end px-2">
          <CarouselNext className="text-black bg-[#E1DDE4] rounded-full p-2" />
        </div>

      </Carousel>
    </div>
  );
}
