import React, { Component } from "react";
import "whatwg-fetch";
import MoviesList from "../../components/MoviesList";

class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=John`
    )
      .then((response) => response.json())
      .then((json) =>
        setTimeout(() => {
          this.setState({ movies: json.results });
          console.log(json.results);
        }, 2000)
      );
  }

  render() {
    return (
      <div>
        The length of movie array is: {this.state.movies.length}
        <MoviesList list={this.state.movies} />
      </div>
    );
  }
}

export default Movies;
