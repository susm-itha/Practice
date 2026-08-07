import React, { useState, useEffect } from "react";


// Custom Hook

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return { count, increase, decrease };
}


// Higher Order Component (HOC)

function withBorder(Component) {
  return function () {
    return (
      <div
        style={{
          border: "2px solid blue",
          padding: "15px",
          margin: "20px",
          borderRadius: "10px",
        }}
      >
        <Component />
      </div>
    );
  };
}

// Component using Fragment

function Student() {
  return (
    <>
      <h2>Student Details</h2>
      <p>Name : Susmitha</p>
      <p>Company : NYV</p>
      <p>Role : Web Developer</p>
    </>
  );
}

// Apply HOC
const StudentWithBorder = withBorder(Student);


// Component using Custom Hook

function Counter() {
  const { count, increase, decrease } = useCounter(0);

  return (
    <>
      <h2>Custom Hook Counter</h2>

      <h3>{count}</h3>

      <button onClick={increase}>Increase</button>

      <button onClick={decrease} style={{ marginLeft: "10px" }}>
        Decrease
      </button>
    </>
  );
}

function PROJECT() {
  return (
    <>
      <h1>React</h1>

      <hr />

      <StudentWithBorder />

      <hr />

      <Counter />
    </>
  );
}

export default PROJECT;