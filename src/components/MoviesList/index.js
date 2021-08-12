import React from "react";
import "../../components/MoviesList/index.css";
import { Link } from "react-router-dom";
// import Movies from "../../containers/Movies";

const MovieListItem = ({ movie }) => (
  <li>
    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
  </li>
);

const MoviesList = (props) => {
  return (
    <div>
      <ul className="movies-list">
        {props.list.map((movie) => (
          <MovieListItem movie={movie} key={movie.id} />
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
