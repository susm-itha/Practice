import React, { useState } from "react";

function Conditional() {
  const [isLogin, setIsLogin] = useState(false);
  const [age, setAge] = useState(16);
  const [showCard, setShowCard] = useState(false);
  const [role, setRole] = useState("");

  let loginMessage;

  // if-else
  if (isLogin) {
    loginMessage = "Welcome Susmitha";
  } else {
    loginMessage = "Please Login";
  }

  // Switch Case
  let roleMessage = "";

  switch (role) {
    case "Student":
      roleMessage = "Student Dashboard Opened";
      break;

    case "Teacher":
      roleMessage = "Teacher Dashboard Opened";
      break;

    case "Admin":
      roleMessage = "Admin Dashboard Opened";
      break;

    default:
      roleMessage = "Select Your Role";
  }

  return (
    <div style={{ padding: "10px", textAlign: "left" }}>
      <h1>Conditional Rendering</h1>

      {/* if-else */}
      <h2>Login (if-else)</h2>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>

      <h3>{loginMessage}</h3>

      <hr />

      {/*Ternary */}
      <h2>Age Verification (Ternary)</h2>

      <button onClick={() => setAge(20)}>Age 20</button>

      <button onClick={() => setAge(15)} style={{ marginLeft: "10px" }}>
        Age 15
      </button>

      <h3>{age >= 18 ? "Eligible for Driving License" : "Not Eligible"}</h3>

      <hr />

      {/* Logical && */}
      <h2>Student ID Card (Logical &&)</h2>

      <button onClick={() => setShowCard(!showCard)}>
        {showCard ? "Hide ID Card" : "Show ID Card"}
      </button>

      {showCard && (
        <div
          style={{
            border: "2px solid blue",
            width: "250px",
            margin: "20px auto",
            padding: "10px",
          }}
        >
          <h3>Student ID Card</h3>
          <p>Name : Susmitha</p>
          <p>Department : ECM</p>
          <p>Roll No : 101</p>
        </div>
      )}

      <hr />

      {/*Switch Case */}
      <h2>User Role (Switch Case)</h2>

      <button onClick={() => setRole("Student")}>Student</button>

      <button
        onClick={() => setRole("Teacher")}
        style={{ marginLeft: "10px" }}
      >
        Teacher
      </button>

      <button
        onClick={() => setRole("Admin")}
        style={{ marginLeft: "10px" }}
      >
        Admin
      </button>

      <h3>{roleMessage}</h3>
    </div>
  );
}

export default Conditional;