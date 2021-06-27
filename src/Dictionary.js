import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("ocean");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    // console.log(response.data[0].meanings[0].definitions[0].definition);
    // console.log(response.data[0].meanings[0].definitions[0].synonyms);
    setResults(response.data[0]);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2 className="header">What are you searching for?</h2>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} defaultValue={"Ocean"}/>
          </form>
          <div className="hint">suggested words: fish, boat, mermaid...</div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
