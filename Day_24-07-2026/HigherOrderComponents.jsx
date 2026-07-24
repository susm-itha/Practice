import React from "react";

function Employee() {
  return <h3>Susmitha - Web Developer</h3>;
}

const withMessage = (Component) => {
  return function () {
    return (
      <div>
        <h2>Employee Details</h2>
        <Component />
      </div>
    );
  };
};

const NewEmployee = withMessage(Employee);

function App() {
  return (
    <div>
      <NewEmployee />
    </div>
  );
}

export default Employee;