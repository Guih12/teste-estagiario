"use client";

import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../api";
import Link from "next/link";
import "./globals.scss";

const Page = () => { // funcao que retorna componente do react
  const [movies, setMovies] = useState<any[]>([]); // define o estado do movies, inicialmente um array vazio q recebe qualquer elemento
                                                  // ja setMovies e a funcao que permite atualizar o estado de movie
  useEffect(() => {
    const getMovies = async () => {              // Nesta funcao pega os filmes e faz com que agurde ate todos os filmes estejam dentro do movies.
      const moviesData = await fetchPopularMovies(); 
      setMovies(moviesData);
    };

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      <h2>🎥 Filmes Populares</h2>
      <div className="grid">
        {movies.length > 0 ? ( // se a lista de filmes for maior do que 0, vai passar a funcao map em todos, definindo todos com a classe "card"
          movies.map((movie) => (
            <div key={movie.id} className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
              <Link href={`/movie/${movie.id}`} className="details-link">
               Ver Detalhes
              </Link>
            </div>
          ))
        ) : (
          <p>Carregando filmes...</p>
        )}
      </div>
    </div>
  );
};

export default Page;
