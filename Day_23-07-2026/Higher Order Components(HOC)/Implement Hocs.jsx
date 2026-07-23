import React, { useState } from "react";

// Authentication HOC
const withAuth = (Component) => (props) => {
  return props.login ? <Component {...props} /> : <h2>Please Login</h2>;
};

// Loading HOC
const withLoading = (Component) => (props) => {
  return props.loading ? <h2>Loading...</h2> : <Component {...props} />;
};

// Authorization HOC
const withAuthorization = (Component) => (props) => {
  return props.role === "admin" ? (
    <Component {...props} />
  ) : (
    <h2>Access Denied</h2>
  );
};

// Main Component
function Dashboard() {
  return <h2>Welcome to Dashboard</h2>;
}

// Apply HOCs
const FinalComponent = withAuth(
  withLoading(
    withAuthorization(Dashboard)
  )
);
function Implement() {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("user");

  return (
    <div>
      <button onClick={() => setLogin(!login)}>
        Login: {login ? "True" : "False"}
      </button>

      <button onClick={() => setLoading(!loading)}>
        Loading: {loading ? "True" : "False"}
      </button>

      <button onClick={() => setRole(role === "admin" ? "user" : "admin")}>
        Role: {role}
      </button>

      <hr />

      <FinalComponent
        login={login}
        loading={loading}
        role={role}
      />
    </div>
  );
}
export default Implement;