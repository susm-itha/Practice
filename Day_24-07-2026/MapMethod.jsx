import React from "react";

function MAP() {
  const Courses = ["Html", "Java", "React"];

  return (
    <div>
      <h2>Courses</h2>

      {Courses.map((Courses, index) => (
        <p key={index}>{Courses}</p>
      ))}
    </div>
  );
}

export default MAP;