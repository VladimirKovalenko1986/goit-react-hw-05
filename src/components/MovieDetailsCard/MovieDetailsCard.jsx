import css from "./MovieDetailsCard.module.css";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

export default function MovieDetailsCard({
  movieDetails: { original_title, vote_average, overview, genres, poster_path },
}) {
  const genreNames = genres.map((genre) => genre.name).join(", ");
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  const location = useLocation();
  const backLinkURL = useRef(location.state ?? "/");

  return (
    <div>
      <Link className={css.link} to={backLinkURL.current}>
        <FaLongArrowAltLeft />
        <p className={css.textLink}>Go back</p>
      </Link>
      <div className={css.conteiner}>
        <div className={css.conteinerImg}>
          <img
            className={css.img}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : defaultImg
            }
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
