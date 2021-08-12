import "./App.css";
import { Component } from "react";
import "whatwg-fetch";
import Movies from "../../containers/movies/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Movie App</h2>
        </header>
        <Movies />
      </div>
    );
  }
}
export default App;
