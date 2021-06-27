import React from "react";
import Synonyms from "./Synonyms"

export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {/* <div className="definition">{definition.definition}</div>
            <div className="definition">{definition.example}</div> */}
            <p>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              {/* Think of creating new file for if statement to bring in example (that way line won't show if there's no example for word, like hot dog) */}
              <strong>Example: </strong>
              <em>{definition.example}</em>
              <br />
            <Synonyms synonyms={definition.synonyms} />
            {/* //   {definition.synonyms} */}
            </p>
          </div>
        );
      })}

      {/* <p>{props.meaning.definitions[0].definition}</p>
      <p>{props.meaning.definitions[0].example}</p> */}
    </div>
  );
}
