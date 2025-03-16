import './index.scss';

export interface MovieType {
    title: string,
    poster_path: string,
    overview: string,
    release_date: string,
    id: number,
}

export default function MovieCard(movie: MovieType) {
    console.log(movie)
    return (
        <li key={movie.id}  className='movie-card'>
            <div className='movie-image'>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
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
                    <button className="btn-know-more">
                        Ver mais
                    </button>
                </div>
            </div>

        </li>
    )
}