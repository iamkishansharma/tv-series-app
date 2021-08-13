import "./App.css";
import { Component, React } from "react";
import "whatwg-fetch";
import Main from "../Main";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2
            onClick={document.getElementsByTagName("div")}
            className="App-title"
          >
            Movie App
          </h2>
        </header>
        <Main />
      </div>
    );
  }
}
export default App;
