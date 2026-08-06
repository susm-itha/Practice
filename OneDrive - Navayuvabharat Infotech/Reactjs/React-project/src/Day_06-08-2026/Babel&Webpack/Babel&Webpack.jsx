import React from "react";

function App2() {

  // ES6 Object
  const student = {
    id: 1,
    name: "Susmitha",
    course: "React JS",
    marks: 90,
    city: "Hyderabad"
  };


  // Destructuring
  const { id, name, course, marks, city } = student;


  // Arrow Function
  const calculateResult = (marks) => {

    if (marks >= 90) {
      return "Excellent";
    } 
    else if (marks >= 60) {
      return "Good";
    } 
    else {
      return "Need Improvement";
    }

  };


  // Template Literal
  const message = `${name} completed ${course}`;


  // Spread Operator
  const skills = ["HTML", "CSS"];
  const updatedSkills = [...skills, "JavaScript", "React"];


  return (

    <div>

      <h2>Babel + Webpack Student Details</h2>


      <table border="1" cellPadding="10">

        <tbody>

          <tr>
            <th>ID</th>
            <td>{id}</td>
          </tr>


          <tr>
            <th>Name</th>
            <td>{name}</td>
          </tr>


          <tr>
            <th>Course</th>
            <td>{course}</td>
          </tr>


          <tr>
            <th>Marks</th>
            <td>{marks}</td>
          </tr>


          <tr>
            <th>City</th>
            <td>{city}</td>
          </tr>


          <tr>
            <th>Result</th>
            <td>{calculateResult(marks)}</td>
          </tr>


          <tr>
            <th>Message</th>
            <td>{message}</td>
          </tr>


          <tr>
            <th>Skills</th>
            <td>{updatedSkills.join(", ")}</td>
          </tr>


        </tbody>

      </table>


    </div>

  );
}

export default App2;