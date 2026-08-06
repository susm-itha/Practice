import React from "react";

function App1() {

  const employee = {
    id: 101,
    name: "Susmitha",
    department: "Developer",
    salary: 50000,
    city: "Hyderabad"
  };

  const { name, department, salary, city } = employee;

  const bonus = (salary) => salary + 5000;

  return (
    <div>
      <h2>ES6 Employee Details</h2>

      <p>Name: {name}</p>
      <p>Department: {department}</p>
      <p>Salary: {salary}</p>
      <p>Bonus: {bonus(salary)}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default App1;