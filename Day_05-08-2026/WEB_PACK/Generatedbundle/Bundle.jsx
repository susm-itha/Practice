import { useState } from "react";

function Bundle() {
  const [showStudents, setShowStudents] = useState(false);

  const students = [
    {
      id: 1,
      name: "Susmitha",
      course: "React",
    },
    {
      id: 2,
      name: "Manasu",
      course: "Java",
    },
    {
      id: 3,
      name: "Teju",
      course: "HTML",
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Generated Bundle</h1>

      <button onClick={() => setShowStudents(true)}>
        Generate Bundle
      </button>

      {showStudents && (
        <>
          <h2>Student Details</h2>

          <table
            border="1"
            cellPadding="10"
            style={{ margin: "20px auto", borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Bundle;
