import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [expression, setExpression] = useState("0");

  const handleClick = (value) => {
    if (expression === "0" && !isNaN(value)) {
      setExpression(value);
    } else {
      setExpression((prev) => prev + value);
    }
  };

  const handleClear = () => {
    setExpression("0");
  };

  const handleEquals = () => {
    try {
      const result = eval(
        expression.replace(/×/g, "*").replace(/÷/g, "/")
      );
      setExpression(result.toString());
    } catch {
      setExpression("Error");
    }
  };

  const handleName = () => {
    setExpression("Geromin Roshan Manese - IT3B");
  };

  return (
    <div>
      {/* Title outside calculator */}
      <h1 className="title">Geromin Roshan Manese - IT3B</h1>

      {/* Calculator box */}
      <div className="container">
        <div className="display">
          <div className="screen">{expression}</div>
        </div>

        <div className="keypad">
          {/* First row */}
          <button className="button" onClick={() => handleClick("7")}>7</button>
          <button className="button" onClick={() => handleClick("8")}>8</button>
          <button className="button" onClick={() => handleClick("9")}>9</button>
          <button className="button" onClick={() => handleClick("÷")}>÷</button>

          {/* Second row */}
          <button className="button" onClick={() => handleClick("4")}>4</button>
          <button className="button" onClick={() => handleClick("5")}>5</button>
          <button className="button" onClick={() => handleClick("6")}>6</button>
          <button className="button" onClick={() => handleClick("×")}>×</button>

          {/* Third row */}
          <button className="button" onClick={() => handleClick("1")}>1</button>
          <button className="button" onClick={() => handleClick("2")}>2</button>
          <button className="button" onClick={() => handleClick("3")}>3</button>
          <button className="button" onClick={() => handleClick("-")}>-</button>

          {/* Fourth row */}
          <button className="button clear" onClick={handleClear}>C</button>
          <button className="button" onClick={() => handleClick("0")}>0</button>
          <button className="button equals" onClick={handleEquals}>=</button>
          <button className="button" onClick={() => handleClick("+")}>+</button>

          {/* Name button */}
          <button className="button name-button" onClick={handleName}>
            MANESE
          </button>
        </div>
      </div>
    </div>
  );
}
