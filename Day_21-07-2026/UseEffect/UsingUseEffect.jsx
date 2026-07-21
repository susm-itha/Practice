import React, { useState, useEffect } from "react";

function Child() {
  useEffect(() => {
    console.log("4. Child Mounted");

    return () => {
      console.log("4. Child Unmounted (Cleanup Function)");
    };
  }, []);

  return <h3>Child Component</h3>;
}

function Effect() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  // 1. Runs after every render
  useEffect(() => {
    console.log("1. useEffect without dependency array");
  });

  // 2. Runs only once
  useEffect(() => {
    console.log("2. useEffect with empty dependency array");
  }, []);

  // 3. Runs when count changes
  useEffect(() => {
    console.log("3. Count changed:", count);
  }, [count]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>useEffect</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <br />
      <br />

      <button onClick={() => setShow(!show)}>
        Show / Hide Child
      </button>

      <br />
      <br />

      {show && <Child />}
    </div>
  );
}

export default Effect;