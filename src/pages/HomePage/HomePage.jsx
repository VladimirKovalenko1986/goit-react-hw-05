import css from "./HomePage.module.css";
import Title from "../../components/Title/Title";
import { fetchTrendingMovies } from "../../api-movies";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await fetchTrendingMovies();
        console.log(data.results);
        setMovies(data.results);
      } catch (error) {
      } finally {
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className={css.conteiner}>
      <Title text="Trending today" />
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
