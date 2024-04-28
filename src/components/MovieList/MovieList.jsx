import css from "./MovieList.module.css";
import { Link } from "react-router-dom";

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((item) => (
        <li key={item.id} className={css.item}>
          <Link to={`/movies/${item.id}`} className={css.link}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
