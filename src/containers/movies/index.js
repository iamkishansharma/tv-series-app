import React, { Component } from "react";
import Intro from "../../components/Intro";
import "whatwg-fetch";
import Loader from "../../components/Loader";
import MoviesList from "../../components/MoviesList";

class Movies extends Component {
  state = {
    movies: [],
    movieName: "",
    isFetching: false,
  };

  // componentDidMount() {
  //   fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=John`
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       this.setState({ movies: json.results });
  //       console.log(json.results);
  //     });
  // }
  onMoviesInputChanged = (e) => {
    this.setState({ movieName: e.target.value, isFetching: true });

    if (e.target.value.trim().length > 0) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${e.target.value}`
      )
        .then((response) => response.json())
        .then((json) => {
          this.setState({ movies: json.results, isFetching: false });
          console.log(json.results);
        });
    }else{
    this.setState({ movieName: e.target.value, isFetching: false });

    }
  };

  render() {
    const { movieName, isFetching } = this.state;

    return (
      <div>
        <Intro message="Here you can search popular movies." />
        <div>
          <input
            value={movieName}
            type="text"
            onChange={this.onMoviesInputChanged}
          />
        </div>

        {!isFetching && MoviesList.length === 0 && movieName.trim() === "" && (
          <p>please enter a movie name</p>
        )}
        {!isFetching && MoviesList.length === 0 && movieName.trim() !== "" && (
          <p>No movie found with this name.</p>
        )}
        {isFetching && <Loader />}
        {!isFetching && <MoviesList list={this.state.movies} />}
      </div>
    );
  }
}

export default Movies;
