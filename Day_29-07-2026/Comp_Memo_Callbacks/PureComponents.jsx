import React, { useState, useMemo, useCallback } from "react";

// ---------------- Normal Component ----------------
function NormalChild({ name }) {
  console.log("Normal Child Rendered");
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>Normal Component</h3>
      <p>Name: {name}</p>
    </div>
  );
}

// ---------------- Pure Component ----------------
const PureChild = React.memo(function PureChild({ name, onClick }) {
  console.log("Pure Child Rendered");
  return (
    <div style={{ border: "1px solid green", padding: "10px", margin: "10px" }}>
      <h3>Pure Component (React.memo)</h3>
      <p>Name: {name}</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
});

function Pure() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  // Expensive Calculation
  const square = useMemo(() => {
    console.log("Calculating Square...");
    return number * number;
  }, [number]);

  // Memoized Function
  const handleClick = useCallback(() => {
    alert("Button Clicked");
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Performance</h1>

      <h2>Parent Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Parent Count
      </button>

      <br /><br />

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

      <h3>Square (useMemo): {square}</h3>

      <hr />

      <NormalChild name="Susmitha" />

      <PureChild
        name="Susmitha"
        onClick={handleClick}
      />
    </div>
  );
}
export default Pure;