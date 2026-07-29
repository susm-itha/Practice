import React, { useState, useCallback } from "react";

// Child Component
const Child = React.memo(({ onButtonClick }) => {
  console.log("Child Rendered");

  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <h3>Child Component</h3>
      <button onClick={onButtonClick}>Child Button</button>
    </div>
  );
});

function Callback() {
  const [count, setCount] = useState(0);

  // Memoized function
  const handleClick = useCallback(() => {
    alert("Button Clicked!");
  }, []);

  console.log("Parent Rendered");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>useCallback</h1>

      <h2>Count : {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <Child onButtonClick={handleClick} />
    </div>
  );
}
export default Callback;