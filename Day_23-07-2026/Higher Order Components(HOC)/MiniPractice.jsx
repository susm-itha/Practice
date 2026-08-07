import React, { useState, useEffect } from "react";

// Loading HOC
const withLoading = (Component) => {
  return function (props) {
    if (props.loading) {
      return <h2>Loading...</h2>;
    }

    return <Component {...props} />;
  };
};

// User Component
function Employee({ employee }) {
  return (
    <div>
      <h2>Employee Details</h2>
      <p><b>Name:</b> {employee.name}</p>
      <p><b>Company:</b> {employee.company}</p>
      <p><b>Role:</b> {employee.role}</p>
    </div>
  );
}

// Wrap with HOC
const EmployeeWithLoading = withLoading(Employee);

function MiniPractice() {
  const [loading, setLoading] = useState(true);
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setEmployee({
        name: "Susmitha",
        company: "NYB",
        role: "Web Developer",
      });

      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <EmployeeWithLoading loading={loading} employee={employee} />
    </div>
  );
}
export default MiniPractice;