import React from "react";

function ListRendering() {
  // Array of course objects
  const courses = [
    {
      id: 1,
      courseName: "React",
      trainer: "Susmitha",
      students: [
        { id: 101, name: "Teju", completed: true },
        { id: 102, name: "Manasu", completed: false },
      ],
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Course Details</h1>

      {/* First map */}
      {courses.map((course) => (
        <div
          key={course.id}
          style={{
            border: "2px solid blue",
            padding: "15px",
            marginBottom: "20px",
          }}
        >
          <h2>Course : {course.courseName}</h2>
          <h3>Trainer : {course.trainer}</h3>

          <h4>Students</h4>

          <ul>
            {/* Second map (Nested List) */}
            {course.students.map((student) => (
              <li key={student.id}>
                {student.name} -

                {/* Conditional Rendering */}
                {student.completed ? (
                  <span style={{ color: "green" }}>
                    Course Completed
                  </span>
                ) : (
                  <span style={{ color: "red" }}>
                    Course Pending
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default ListRendering;