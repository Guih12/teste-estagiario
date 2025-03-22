import React from "react";

interface ModalProps {
  selectedMovie: {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    overview: string;
    genres: { id: number; name: string }[];
    runtime: number;
    vote_average: number;
    adult: boolean;
  } | null;
  closeModal: () => void;
}

export const Modal = ({ selectedMovie, closeModal }: ModalProps) => {
  if (!selectedMovie) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/90 bg-opacity-50 z-50">
      <div className="bg-neutral-900 rounded-lg p-6 max-w-2xl w-full mx-4 relative">
        <button
          onClick={closeModal}
          className="absolute text-4xl top-2 right-2 text-white hover:text-red-600 cursor-pointer"
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
            alt={selectedMovie.title}
            className="w-full md:w-1/3 h-auto rounded-lg"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white">{selectedMovie.title}</h2>
            <p className="text-gray-300 mt-2">{selectedMovie.overview}</p>
            <div className="mt-4 space-y-2 font-bold">
              <p className="text-gray-400">
                <strong>Ano de lançamento:</strong> {selectedMovie.release_date.split("-")[0]}
              </p>
              <p className="text-gray-400">
                <strong>Gêneros:</strong>{" "}
                {selectedMovie.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p className="text-gray-400">
                <strong>Duração:</strong> {selectedMovie.runtime} minutos
              </p>
              <p className="text-gray-400">
                <strong>Classificação indicativa:</strong>{" "}
                {selectedMovie.adult ? "18+" : "sem classificação"}
              </p>
              <p className="text-[#F6CA2A]">
                <strong className="text-gray-400">Nota média:</strong> {selectedMovie.vote_average.toFixed(1)}/10
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
