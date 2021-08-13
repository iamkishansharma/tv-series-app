import React from "react";
import "../../components/MoviesList/index.css";
import { Link } from "react-router-dom";
// import Movies from "../../containers/Movies";

const MovieListItem = ({ movie }) => <li>{movie.title}</li>;

const MoviesList = (props) => {
  return (
    <div>
      <ul className="movies-list">
        {props.list.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <MovieListItem movie={movie} key={movie.id} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
