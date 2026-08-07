import React, { useState, memo } from "react";

// ---------------- Normal Component ----------------
function NormalChild({ name }) {
  console.log("Normal Child Rendered");

  return (
    <div style={{ border: "2px solid red", padding: "10px", margin: "10px" }}>
      <h3>Normal Component</h3>
      <p>Name : {name}</p>
    </div>
  );
}

// ---------------- Memo Component ----------------
const MemoChild = memo(function MemoChild({ name }) {
  console.log("Memo Child Rendered");

  return (
    <div style={{ border: "2px solid green", padding: "10px", margin: "10px" }}>
      <h3>React.memo Component</h3>
      <p>Name : {name}</p>
    </div>
  );
});

// ---------------- Parent Component ----------------
function Memo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Susmitha");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React.memo</h1>

      <h2>Counter : {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>

      <br /><br />

      <button onClick={() => setName("Teju")}>
        Change Name
      </button>

      <NormalChild name={name} />

      <MemoChild name={name} />
    </div>
  );
}
export default Memo;