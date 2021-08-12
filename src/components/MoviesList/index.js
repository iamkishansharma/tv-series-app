import React from "react";
import "../../components/MoviesList/index.css";

const MovieListItem = ({ movie }) => <li>{movie.title}</li>;

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
