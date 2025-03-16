'use client'; // precisava definir que minha pagina era do lado do cliente

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { url } from 'inspector';

// array para tipagem dos filmes 
export interface MovieType {
    title: string,
    poster_path: string,
    overview: string,
    release_date: string,
    id: number,
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
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '06f10fc8741a672af455421c239a1ffc',
                language: 'pt-BR',
            }
        }).then(response =>  {             //manipulando a resposta
            setMovies(response.data.results)
            console.log(response.data.results)
        })
    }
    // percorrendo array de filmes com map e listando um por um
    return (
        <section className='test'>
            <ul className='movie-list'>
                {movies.map((movie) => 
                <li key={movie.id}  className='movie-card'>
                    <p className='movie-title'>
                        {movie.title}
                    </p>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                    <p className='description'>
                        {movie.overview}
                    </p>
                    <p className='movie-year'>
                        {movie.release_date}
                    </p>
                </li>
                )}
            </ul>
        </section>
    );
}