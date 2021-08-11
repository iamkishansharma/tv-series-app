import "./App.css";
import Intro from "../Intro";
import { Component } from "react";
import "whatwg-fetch";
import Movies from "../../containers/movies/indes";

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Movie App</h2>
        </header>
        <Intro message="Here you can search popular movies." />
        <Movies />
      </div>
    );
  }
}
export default App;
