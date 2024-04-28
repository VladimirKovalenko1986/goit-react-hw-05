import css from "./MovieDetailsCard.module.css";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function MovieDetailsCard({
  movieDetails: {
    original_title,
    vote_average,
    overview,
    genres,
    backdrop_path,
  },
}) {
  const genreNames = genres.map((genre) => genre.name).join(", ");
  return (
    <div>
      <Link className={css.link} to="/">
        <FaLongArrowAltLeft />
        <p className={css.textLink}>Go back</p>
      </Link>
      <div className={css.conteiner}>
        <div className={css.conteinerImg}>
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt={original_title}
          />
        </div>
        <div className={css.conteinerCard}>
          <h2 className={css.title}>{original_title}</h2>
          <p className={css.text}>
            Use Score: {Math.round((vote_average / 10) * 100)}%
          </p>
          <h3>Overview</h3>
          <p className={css.text}>{overview}</p>
          <h3>Genres</h3>
          <p>{genreNames}</p>
        </div>
      </div>
    </div>
  );
}
