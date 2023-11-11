import React, { useState } from "react";

export default function TextForm(props) {
  const toUpper = () => {
    let text1 = document.getElementById("matter");
    let str = text1.value;
    setText(str.toUpperCase());
    props.showAlert("Converted to uppercase", "success");
  };
  const toLower = () => {
    let text1 = document.getElementById("matter");
    let str = text1.value;
    setText(str.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  };
  const clearText = () => {
    let text1 = document.getElementById("matter");
    text1.value = "";
    props.showAlert("Cleared text", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("matter");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const handleonChange = (e) => {
    console.log("On change");
    setText(e.target.value);
  };
  const [text, setText] = useState("");
  //   setText("Enter here 2");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h3>{props.heading}</h3>
          </label>
          <textarea
            // placeholder={text}
            className="form-control"
            id="matter"
            rows="9"
            onChange={handleonChange}
            value={text}
            style={{
              background: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={toUpper}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={toLower}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={clearText}>
          Clear text
        </button>
      </div>
      <div className="container my-2">
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
      </div>
    </>
  );
}
