import React, { useState } from "react";

function Mini() {
  const [isLogin, setIsLogin] = useState(false);
  const [userType, setUserType] = useState("");

  // Login
  const login = () => {
    setIsLogin(true);
  };

  // Logout
  const logout = () => {
    setIsLogin(false);
    setUserType("");
  };

  // Dashboard Component
  const Dashboard = () => {
    switch (userType) {
      case "Admin":
        return (
          <div
            style={{
              border: "2px solid blue",
              width: "300px",
              margin: "20px auto",
              padding: "15px",
            }}
          >
            <h2>Admin Dashboard</h2>
            <p>Welcome Admin!</p>
            <p>reports.</p>
             <p>Frontend Development</p>
            <p>React Developer</p>
          </div>
        );

      case "Student":
        return (
          <div
            style={{
              border: "2px solid green",
              width: "300px",
              margin: "20px auto",
              padding: "15px",
            }}
          >
            <h2>Student Dashboard</h2>
            <p>Welcome Student!</p>
            <p>courses</p>
            <p>
              <b>Department:</b> Frontend Development
            </p>
            <p>
              <b>Designation:</b> React Developer
            </p>
          </div>
        );

      case "Employee":
        return (
          <div
            style={{
              border: "2px solid black",
              width: "350px",
              margin: "20px auto",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <h2>Employee Dashboard</h2>

            <p>
              <b>Employee ID:</b> EMP101
            </p>
            <p>
              <b>Name:</b> Susmitha
            </p>
            <p>
              <b>Department:</b> Frontend Development
            </p>
            <p>
              <b>Designation:</b> React Developer
            </p>
            <p>
              <b>Email:</b> susmitha@gmail.com
            </p>
            <p>
              <b>Status:</b> Active
            </p>
          </div>
        );

      default:
        return <h2>Please Select User Type</h2>;
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Login / Logout</h1>

      {isLogin ? (
        <>
          <button onClick={logout}>Logout</button>

          <br />
          <br />

          <label>
            <b>Select User Type: </b>
          </label>

          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Admin">Admin</option>
            <option value="Student">Student</option>
            <option value="Employee">Employee</option>
          </select>

          <Dashboard />
        </>
      ) : (
        <>
          <h2>Please Login</h2>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
}

export default Mini