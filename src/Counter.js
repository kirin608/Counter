import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const changeCounter = (op) => {
    if (op === '+') {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <div className="App">
      <h1 className="counter">Counter:{counter}</h1>
      <ul>
        <button className="button" onClick={() => changeCounter('+')}>+</button>
        <button className="button" onClick={() => changeCounter('-')}>-</button>
      </ul>

    </div>


  );
};
export default Counter;