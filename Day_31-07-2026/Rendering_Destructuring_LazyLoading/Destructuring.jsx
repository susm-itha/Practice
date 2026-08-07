import React, { useState } from "react";

function Employee({ employee }) {
  // 1. Object Destructuring
  const { id, name, age, department } = employee;

  // 2. State Destructuring
  const [salary, setSalary] = useState(30000);

  // 3. Array Destructuring
  const skills = ["React", "JavaScript", "CSS"];
  const [skill1, skill2, skill3] = skills;

  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "15px",
        margin: "20px",
        width: "350px",
      }}
    >
      <h2>Employee Details</h2>

      <p><b>ID:</b> {id}</p>
      <p><b>Name:</b> {name}</p>
      <p><b>Age:</b> {age}</p>
      <p><b>Department:</b> {department}</p>

      <h3>Skills</h3>
      <p>{skill1}</p>
      <p>{skill2}</p>
      <p>{skill3}</p>

      <h3>Salary</h3>
      <p>₹{salary}</p>

      <button onClick={() => setSalary(salary + 5000)}>
        Increase Salary
      </button>

      <button onClick={() => setSalary(salary + 5000)}>
        Decrease Salary
      </button>

      <hr />

      {/* 4. Function Parameter Destructuring */}
      <EmployeeAddress city="Hyderabad" state="Telangana" />
    </div>
  );
}

// Function Parameter Destructuring
function EmployeeAddress({ city, state }) {
  return (
    <div>
      <h3>Address</h3>
      <p>City : {city}</p>
      <p>State : {state}</p>
    </div>
  );
}

function Destructuring() {
  const employee = {
    id: 101,
    name: "Susmitha",
    age: 23,
    department: "React Developer",
  };

  return (
    <div>
      <Employee employee={employee} />
    </div>
  );
}
export default Destructuring;
