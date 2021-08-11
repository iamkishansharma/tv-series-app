import React from "react";

const MoviesList = (props) => {
  return (
    <div>
      Hello from Movies
      <ol>
        {props.list.map((movie) => (
          <li>
            <h4>{movie.title}</h4>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MoviesList;
