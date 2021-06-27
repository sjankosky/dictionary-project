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
        <footer>
          This project is coded by{" "}
          <a
            href="https://www.linkedin.com/in/sarah-jankosky-7a657b59/"
            target="_blank"
            rel="noreferrer"
          >
            Sarah Jankosky
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/sjankosky/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
