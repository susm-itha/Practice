import React from "react";

function withMessage(Component) {
  return function () {
    return (
      <div>
        <h2>Welcome to React HOC</h2>
        <Component />
      </div>
    );
  };
}

function Student() {
  return <h3>Student: Susmitha</h3>;
}

// Reusable HOC
const NewStudent = withMessage(Student);

function Reusable() {
  return (
    <div>
      <NewStudent />
    </div>
  );
}

export default Reusable;
