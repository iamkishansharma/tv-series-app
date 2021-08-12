import { Component } from "react";
import "whatwg-fetch";
import Loader from "../../components/Loader";
import "../SingleMovie/index.css";

class SingleMovie extends Component {
  state = {
    show: null,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({ show: json });
        console.log(json.title);
      });
  }

  render() {
    const { show } = this.state;

    return (
      <div>
        {show === null && <Loader />}
        {show !== null && (
          <div>
            <img
              className="image-style"
              src={`https://image.tmdb.org/t/p/w300/${show.poster_path}`}
              alt="Movie Poster"
            />
            <div className="details-div">
              <h2>
                {show.title} ({show.release_date})
              </h2>
              <p>{show.overview}</p>
              <h5>Popularity: {show.popularity}</h5>
              <h5>Vote Avg.: {show.vote_average}</h5>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default SingleMovie;
