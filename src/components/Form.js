import React, { useState } from "react";

export default function Form(props) {
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
  };
  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  const changeBg = (event) => {
    let color = prompt("Enter your name of colour: ");
    document.body.style.background = color;
  };

  const copyText = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const extraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const boldText = () => {
    let target = document.getElementById("exampleFormControlTextarea1");
    if (target.style.fontWeight === "bolder") {
      target.style.fontWeight = "normal";
    } else {
      target.style.fontWeight = "bolder";
    }
  };

  const italicText = () => {
    let target = document.getElementById("exampleFormControlTextarea1");
    if (target.style.fontStyle === "italic") {
      target.style.fontStyle = "normal";
    } else {
      target.style.fontStyle = "italic";
    }
  };

  const underlineText = () => {
    let target = document.getElementById("exampleFormControlTextarea1");
    if (target.style.textDecoration === "underline") {
      target.style.textDecoration = "none";
    } else {
      target.style.textDecoration = "underline";
    }
  };

  const alignCenter = () => {
    let target = document.getElementById("exampleFormControlTextarea1");
    if (target.style.textAlign === "center") {
      target.style.textAlign = "none";
    } else {
      target.style.textAlign = "center";
    }
  };



  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3">
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#282923d1" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="exampleFormControlTextarea1"
            rows="10"
            placeholder="Enter text here"
            value={text}
            onChange={handelOnChange}
          ></textarea>
        </div>
        <button className="btn btn-outline-success mx-2" onClick={upperCase}>
          UpperCase
        </button>
        <button className="btn btn-outline-success mx-2" onClick={lowerCase}>
          LowerCase
        </button>
        <button className="btn btn-outline-success mx-2" onClick={changeBg}>
          BackGround
        </button>
        <button className="btn btn-outline-success mx-2" onClick={clearText}>
          Clear
        </button>
        <button className="btn btn-outline-success mx-2" onClick={extraSpace}>
          Extra Space
        </button>
        <button className="btn btn-outline-success mx-2" onClick={copyText}>
          Copy
        </button>
        <button className="btn btn-outline-success mx-2" onClick={boldText}>
          Bold
        </button>
        <button className="btn btn-outline-success mx-2" onClick={italicText}>
          Italic
        </button>
        <button className="btn btn-outline-success mx-2" onClick={underlineText}>
          Underline
        </button>
        <button className="btn btn-outline-success mx-2" onClick={alignCenter}>
          Center
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Text Summery</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.08 * text.split(" ").length} Minutes to Read.</p>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Text Preview.</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
