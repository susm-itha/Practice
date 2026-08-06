import React from "react";

function Babel() {
  const employee = {
    id: 101,
    name: "Susmitha",
    department: "Developer",
    salary: 50000,
    city: "Hyderabad",
  };

  return (
    <div>
      <h2>Employee Details</h2>

      <table border="1" cellPadding="10">
        <tbody>
          <tr>
            <th>ID</th>
            <td>{employee.id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{employee.name}</td>
          </tr>
          <tr>
            <th>Department</th>
            <td>{employee.department}</td>
          </tr>
          <tr>
            <th>Salary</th>
            <td>{employee.salary}</td>
          </tr>
          <tr>
            <th>City</th>
            <td>{employee.city}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Babel;

