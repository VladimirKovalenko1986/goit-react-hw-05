import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../api-movies";
import { useState, useEffect } from "react";
import MovieCastList from "../App/MovieCastList/MovieCastList";
import Loader from "../App/Loader/Loader";
import ErrorMessage from "../App/ErrorMessage/ErrorMessage";

export default function MovieCast() {
  const { moviesId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCastId() {
      if (!moviesId) {
        return;
      }
      try {
        setIsLoading(true);
        const data = await fetchMovieCast(moviesId);
        console.log(data.cast);
        setMovieCast(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCastId();
  }, [moviesId]);

  return <div>{setMovieCast && <MovieCastList movieCast={movieCast} />}</div>;
}
