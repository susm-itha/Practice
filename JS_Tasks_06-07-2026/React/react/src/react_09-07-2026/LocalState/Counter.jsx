import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>Counter Component</h2>

      <h3>Count : {count}</h3>

      <button onClick={increase}>Increase</button>

      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default Counter;