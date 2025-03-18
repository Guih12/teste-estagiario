'use client'; // precisava definir que minha pagina era do lado do cliente

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { url } from 'inspector';
import MovieCard from '../MovieCard';

// array para tipagem dos filmes 
export interface MovieType {
    id: number,
    title: string,
    poster_path: string,
    overview: string,
    genre_ids: number,
    release_date: string,
    runtime: number,
    certification: string,
    vote_average: number,
}

export default function MovieList() {
    const [movies, setMovies] = useState<MovieType[]>([]);
    // garantindo uma unica requisicao para a api
    useEffect(() => {   
        getMovies();
    }, []) //garantindo que esteja sem dependencias 
    const getMovies = () => {
        axios({
            method: 'get',
            url: ' https://api.themoviedb.org/3/movie/top_rated?',
            params: {
                api_key: '06f10fc8741a672af455421c239a1ffc',
                language: 'pt-BR',
            }
        }).then(response => {  //manipulando a resposta
            setMovies(response.data.results);
        }).catch(error => {
            console.log("Erro ao carregar filmes", error);
        })
    }
    // percorrendo array de filmes com map e listando um por um
    return (
        <section className='test'>
            <ul className='movie-list'>
                {movies.map((movie) => 
                    <MovieCard
                        id={movie.id}
                        title={movie.title}
                        poster_path={movie.poster_path}
                        overview={movie.overview}
                        release_date={movie.release_date}
                        genre_ids={movie.genre_ids}
                        runtime={movie.runtime}
                        certification={movie.certification}
                        vote_average={movie.vote_average}
                    />
                )}
            </ul>
        </section>
    );
}