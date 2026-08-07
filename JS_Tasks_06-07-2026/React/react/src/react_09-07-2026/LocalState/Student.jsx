import { useState } from "react";

function Student() {

  // Object State
  const [student, setStudent] = useState({
    name: "",
    course: ""
  });

  // Array State
  const [students, setStudents] = useState([]);

  function handleChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  }

  function addStudent() {

    if (student.name === "" || student.course === "") {
      alert("Enter all details");
      return;
    }

    // Immutable Array Update
    setStudents([...students, student]);

    // Immutable Object Update
    setStudent({
      name: "",
      course: ""
    });
  }

  return (
    <div>

      <h2>Student Component</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={student.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="course"
        placeholder="Enter Course"
        value={student.course}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={addStudent}>Add Student</button>

      <h3>Student List</h3>

      {
        students.map((item, index) => (
          <div key={index}>
            <p>Name : {item.name}</p>
            <p>Course : {item.course}</p>
            <hr />
          </div>
        ))
      }

    </div>
  );
}

export default Student;