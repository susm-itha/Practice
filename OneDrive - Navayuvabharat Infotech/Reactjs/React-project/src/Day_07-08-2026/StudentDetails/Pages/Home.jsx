import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home Page</h2>

      <button onClick={() => navigate("/student/101")}>
        Student Details
      </button>
    </div>
  );
}

export default Home;