import React, { useState } from "react";

function LoadingEmpty() {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);

  // Loading Example
  const loadData = () => {
    setLoading(true);

    setTimeout(() => {
      setStudents(["Susmitha", "Mansu", "Teju"]);
      setLoading(false);
    }, 2000);
  };

  // Empty State Example
  const clearData = () => {
    setStudents([]);
  };

  return (
    <div style={{ textAlign: "left", marginTop: "40px" }}>
      <h1>Loading & Empty</h1>

      <button onClick={loadData}>Load Students</button>
      <button onClick={clearData} style={{ marginLeft: "10px" }}>
        Clear Students
      </button>

      <hr />

      {/* Loading State */}
      {loading ? (
        <h2>Loading...</h2>
      ) : students.length === 0 ? (
        /* Empty State */
        <h2>No Students Found</h2>
      ) : (
        <div>
          <h2>Student List</h2>
          {students.map((student, index) => (
            <p key={index}>{student}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default LoadingEmpty;