import React, { useState } from "react";

function Status() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("Guest");

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Role & Authentication</h2>

      {/* Login / Logout */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <br />
      <br />

      {/* Change Role */}
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option>Guest</option>
        <option>User</option>
        <option>Admin</option>
      </select>

      <hr />

      {/* Authentication Status */}
      {!isLoggedIn ? (
        <h3>Please Login</h3>
      ) : (
        <div>
          <h3>Welcome!</h3>

          {/* Render based on Role */}
          {role === "Admin" && <Admin />}
          {role === "User" && <User />}
          {role === "Guest" && <Guest />}
        </div>
      )}
    </div>
  );
}

function Admin() {
  return <h2>Admin Dashboard</h2>;
}

function User() {
  return <h2>User Dashboard</h2>;
}

function Guest() {
  return <h2>Guest Page</h2>;
}

export default Status;