import "./App.css";

const Intro = (props) => {
  return <p className="App-intro">Our first fundtional component.</p>;
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-title">Tv Series List</h2>
      </header>
      <Intro />
    </div>
  );
}

export default App;
