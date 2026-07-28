import React from "react";

// Authentication HOC
const withAuth = (WrappedComponent) => {
  return function (props) {
    const isLoggedIn = true; // Change to false to test

    if (!isLoggedIn) {
      return <h2>Please Login First</h2>;
    }

    return <WrappedComponent {...props} />;
  };
};

// Loading HOC
const withLoading = (WrappedComponent) => {
  return function (props) {
    if (props.loading) {
      return <h2>Loading...</h2>;
    }

    return <WrappedComponent {...props} />;
  };
};

// Original Component
function Employee() {
  return (
    <div
      style={{
        border: "2px solid black",
        width: "300px",
        padding: "15px",
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      <h2>Employee Details</h2>
      <p><b>Name:</b> Susmitha</p>
      <p><b>Company:</b> NYV</p>
      <p><b>Role:</b> Web Developer</p>
    </div>
  );
}

// Apply HOCs
const AuthEmployee = withAuth(Employee);
const FinalEmployee = withLoading(AuthEmployee);

function HOC() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Higher Order Component (HOC)</h1>

      {/* Change loading to true/false */}
      <FinalEmployee loading={false} />
    </div>
  );
}
export default HOC;