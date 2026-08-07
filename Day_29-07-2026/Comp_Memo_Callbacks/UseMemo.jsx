import React, { useState, useMemo } from "react";

function UseMemo() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  // Expensive calculation WITHOUT useMemo
  function slowCalculation(num) {
    console.log("Running Slow Calculation...");
    let result = 0;

    for (let i = 0; i < 1000; i++) {
      result += num;
    }

    return result;
  }

  // Runs on EVERY render
  const withoutMemo = slowCalculation(number);

  // Runs ONLY when number changes
  const withMemo = useMemo(() => {
    console.log("Running useMemo Calculation...");
    let result = 0;

    for (let i = 0; i < 1000; i++) {
      result += number;
    }

    return result;
  }, [number]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>useMemo Example</h1>

      <h3>Enter Number</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <br />
      <br />

      <button onClick={() => setCount(count + 1)}>
        Increase Count : {count}
      </button>

      <hr />

      <h2>Without useMemo</h2>
      <p>{withoutMemo}</p>

      <h2>With useMemo</h2>
      <p>{withMemo}</p>
    </div>
  );
}

export default UseMemo;