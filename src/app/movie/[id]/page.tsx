"use client";

import React, { useEffect, useState } from "react";
import { fetchMovieDetails, fetchMovieCertification } from "../../../../api";
import { useParams } from "next/navigation"; 
import "../../globals.scss";

const MovieDetails = () => {
  const [movie, setMovie] = useState<any | null>(null); // Estado para o filme
  const [comments, setComments] = useState<string[]>([]); // Estado para os comentarios
  const [newComment, setNewComment] = useState<string>(""); // Estado para o comentario
  const [rating, setRating] = useState<number>(0); // Estado para a nota
  const [hover, setHover] = useState<number>(0); // Estado para o hover nas estrelas
  const [certification, setCertification] = useState<string>("Livre");

  const params = useParams();
  const id = params.id as string;

  useEffect(() => { // Faz a mesma coisa, a funcao pega os dados do filme pelo id e faz com que aguarde ate ficar pronto, dps salva os detalhes do filme 
    if (!id) return;

    const getMovieDetails = async () => {
      try {
        const movieData = await fetchMovieDetails(id);
        setMovie(movieData);
        const certificationData = await fetchMovieCertification(id);
        setCertification(certificationData);

      } catch (error) {
        console.error("Erro ao carregar os detalhes do filme:", error);
      }
    };

    getMovieDetails();
  }, [id]);

  const handleAddComment = () => {
    if (newComment.trim()) { // verifica se e uma stri e n tem apenas espacos em brancos ou esta vazio
      setComments([...comments, newComment]); // (... cria um novo array com outros cometarios e salva o novo na ultima posicao)
      setNewComment(""); // ambas as funcoes set sao para mudar os estados.
    }
  };

  const handleRating = (selectedRating: number) => { // recebe uma nota 1 a 5 (representada pelas estrelas)
    setRating(selectedRating); // atualiza o estado de armazenamento da avaliacao
    console.log("Nota selecionada:", selectedRating);
  };

  if (!movie) {
    return <p>Carregando detalhes do filme...</p>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p><strong>Data de Lançamento:</strong> {movie.release_date}</p>
      <p><strong>Descrição:</strong> {movie.overview}</p>
      <p><strong>Gênero:</strong> {movie.genres.map((genre: any) => genre.name).join(", ")}</p>
      <p><strong>Duração:</strong> {movie.runtime} minutos</p>
      <p><strong>Classificação Indicativa:</strong> {certification}</p>

      <section className="rating">
        <h3>Avalie o Filme</h3>
        <div className="star-rating">
          {[...Array(5)].map((star, index) => { // cria um array de 5 espacos indefinidos e dps mapeia ele por indice 
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => handleRating(ratingValue)} // chama a fucao ao clique
                />
                <span // esta parte faz com que toda vez que o mouse passar por cima das estrelas vai mudar a cor dependendo da estrela que passar.
                  className="star"
                  style={{
                    color: ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                >
                  &#9733;
                </span>
              </label>
            );
          })}
        </div>
        <p>Sua nota: {rating} estrelas</p>
      </section>

      <section className="comments">
        <h3>Comentários</h3>
        <div className="comment-input">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)} // qunado o usuario digita algo, aciona o evento onChange e altera o estado do newComment 
            placeholder="Deixe seu comentário..."
          />
          <button onClick={handleAddComment}>Adicionar Comentário</button>
        </div>
        <div className="comment-list">
          {comments.map((comment, index) => ( // itera por todo array onde esta salvo os comentarios e depois renderiza todos os comentarios em um elemento, no caso a div,
           // key = {index} serve para otimizar a renderizacao, pega o indice do comentario como chave unica
           <div key={index} className="comment"> 
              <p>{comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MovieDetails;