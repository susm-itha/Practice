import React, { useState, useEffect, memo } from "react";

// Reusable Component + React.memo()
const EmployeeCard = memo(({ employee }) => {
  console.log("Rendering:", employee.name);

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
        width: "250px",
      }}
    >
      <h3>{employee.name}</h3>
      <p>Email: {employee.email}</p>
      <p>Company: {employee.company.name}</p>
    </div>
  );
});

function MiniAss() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // API Fetch using useEffect
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading Employees...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div style={{ textAlign: "left" }}>
      <h1>Employee List</h1>

      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
        />
      ))}
    </div>
  );
}

export default MiniAss;