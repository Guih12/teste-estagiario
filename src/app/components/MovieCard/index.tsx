import './index.scss';
import React, { useState } from 'react';
import './modal.scss';
import Modal from 'react-modal';

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

export default function MovieCard(movie: MovieType) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <li key={movie.id}  className='movie-card'>
            <div className='movie-image'>
                <img 
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                    alt={movie.title} 
                />
            </div>
            <div className="movie-infos">
                <p className='movie-title'>
                    {movie.title.length > 25 ? 
                        `${movie.title.substring(0,25)}...`
                        : movie.title
                    }
                </p>
                <div className="hidden-content">
                    <p className='movie-year'>
                        {movie.release_date}
                    </p>
                    {movie.overview &&
                        <p className='movie-description'>
                            {movie.overview.length > 100
                            ? `${movie.overview.substring(0, 100)}...`
                            : movie.overview  
                            }
                        </p>
                    }                    
                    <button onClick={openModal} className="btn-know-more">
                        Ver mais
                    </button>
                </div>
            </div>

            {/* Modal */}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Detalhes do Filme"
            >
            <section className='modal-container'>
                <div className='modal-image'>
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt={movie.title || 'Não disponível'}
                    />
                </div>
                <div className='modal-content'>
                    <h2>{movie.title || 'Não disonível'}</h2>
                    <p>{movie.overview || 'Não disonível'}</p>
                    <p className='movie-year'>
                        {movie.release_date || 'Não disponível'}
                    </p>
                    <p className='movie-genres'>
                        Gênero: {movie.genre_ids || 'Não disponível'}
                    </p>
                    <p className='movie-time'>
                        Tempo: {movie.runtime || 'Não disponível'}
                    </p>
                    <p className='movie-certification'>
                        Classificação indicativa: {movie.certification || 'Não disponível'}
                    </p>
                    <p className='movie-vote'>
                        Nota: {movie.vote_average.toFixed(1) || 'Não disponível'}
                    </p>
                    <button onClick={closeModal}>Fechar</button>
                </div>
            </section>
            </Modal>

        </li>
    )
}
