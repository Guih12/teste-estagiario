"use client";

import { PopularCard } from "@/components/PopularCard";
import { RatedCard } from "@/components/RatedCard";
import { UpComing } from "@/components/UpComing";

export default function Home() {

  return (
    <div className="p-3 sm:p-6 rounded-lg shadow-mdp-4 space-y-6 sm:space-y-12">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center mt-30">
        Encontre os Melhores Filmes🎬
      </h1>
      <div className="p-3 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">⏳ Em Breve</h2>
        <UpComing />
      </div>
      <div className="p-3 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">⭐ Mais Votados</h2>
        <RatedCard />
      </div>
      <div className="p-3 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">🔥 Populares</h2>
        <PopularCard />
      </div>
    </div>
  );
}
