import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank">
        {props.phonetic.text}
      </a>
      {/* <span className="icon"> 🔈</span> */}
    </div>
  );
}
