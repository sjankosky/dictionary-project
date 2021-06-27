import ocean from "./ocean.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          HELLO
          <img src={ocean} className="img-ocean" alt="ocean" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Sarah Jankosky</footer>
      </div>
    </div>
  );
}
