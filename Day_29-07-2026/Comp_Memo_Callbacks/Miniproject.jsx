import React, {
  useState,
  useMemo,
  useCallback,
  memo,
  PureComponent,
} from "react";

// ---------------- Normal Component ----------------
function NormalChild({ name }) {
  console.log("Normal Child Rendered");

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>Normal Component</h3>
      <p>{name}</p>
    </div>
  );
}

// ---------------- Pure Component ----------------
class PureChild extends PureComponent {
  render() {
    console.log("Pure Component Rendered");

    return (
      <div
        style={{ border: "1px solid green", padding: "10px", margin: "10px" }}
      >
        <h3>Pure Component</h3>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

// ---------------- React.memo ----------------
const MemoChild = memo(({ count }) => {
  console.log("React.memo Child Rendered");

  return (
    <div
      style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}
    >
      <h3>React.memo()</h3>
      <p>Count : {count}</p>
    </div>
  );
});

// ---------------- useCallback ----------------
const ButtonChild = memo(({ onClick }) => {
  console.log("Button Child Rendered");

  return (
    <div
      style={{ border: "1px solid red", padding: "10px", margin: "10px" }}
    >
      <h3>useCallback()</h3>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
});

function MINI() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Expensive Calculation
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < 500000000; i++) {
      result += i;
    }
    return result + num;
  };

  // useMemo
  const total = useMemo(() => expensiveCalculation(count), [count]);

  // useCallback
  const handleClick = useCallback(() => {
    alert("Button Clicked");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Performance Optimization</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Type Here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h2>Count : {count}</h2>

      <h2>Expensive Result : {total}</h2>

      <NormalChild name="Susmitha" />

      <PureChild name="Susmitha" />

      <MemoChild count={count} />

      <ButtonChild onClick={handleClick} />
    </div>
  );
}
export default MINI;