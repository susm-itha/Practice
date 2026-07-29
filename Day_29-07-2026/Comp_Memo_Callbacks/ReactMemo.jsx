import React, { useState, memo, useMemo } from "react";

function NormalEmployee({ employee }) {
  console.log("Normal Employee Rendered");

  return (
    <div style={styles.card}>
      <h3>Normal Employee</h3>
      <p>{employee.name}</p>
    </div>
  );
}

const MemoEmployee = memo(function MemoEmployee({ employee }) {
  console.log("Memo Employee Rendered");

  return (
    <div style={styles.card}>
      <h3>Memo Employee</h3>
      <p>{employee.name}</p>
    </div>
  );
});

function ReactMemo() {
  const [count, setCount] = useState(0);

  // Object is memoized
  const employee = useMemo(
    () => ({
      id: 101,
      name: "Susmitha",
      department: "React Developer",
      salary: 50000,
    }),
    []
  );

  return (
    <div style={styles.container}>
      <h1>React.memo + useMemo</h1>

      <h2>Count : {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <NormalEmployee employee={employee} />
      <MemoEmployee employee={employee} />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  card: {
    border: "2px solid green",
    margin: "15px auto",
    padding: "10px",
    width: "250px",
  },
};
export default ReactMemo;