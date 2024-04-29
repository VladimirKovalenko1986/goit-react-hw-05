import css from "./MovieDetailsPage.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMoviesDetails } from "../../api-movies";
import { Link, Outlet } from "react-router-dom";
import Loader from "../../components/App/Loader/Loader";
import ErrorMessage from "../../components/App/ErrorMessage/ErrorMessage";
import MovieDetailsCard from "../../components/MovieDetailsCard/MovieDetailsCard";

export default function MovieDetailsPage() {
  const { moviesId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchDetailsId() {
      if (!moviesId) {
        return;
      }
      try {
        setIsLoading(true);
        const data = await fetchMoviesDetails(moviesId);
        setMovieDetails(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDetailsId();
  }, [moviesId]);

  return (
    <div className={css.conteiner}>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {movieDetails && <MovieDetailsCard movieDetails={movieDetails} />}

      <p className={css.text}>Additional iformation</p>

      <ul className={css.list}>
        <li>
          <Link to="cast" className={css.link}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" className={css.link}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
