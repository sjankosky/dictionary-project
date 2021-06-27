import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">
              {/* <strong>Definition: </strong> */}
              {definition.definition}
            </div>
            <div className="example">
              {/* <strong>Example: </strong> */}
              {definition.example}
            </div>
            {/* Think of creating new file for if statement to bring in example (that way line won't show if there's no example for word, like hot dog) */}
            <br />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}

      {/* <p>{props.meaning.definitions[0].definition}</p>
      <p>{props.meaning.definitions[0].example}</p> */}
    </div>
  );
}
