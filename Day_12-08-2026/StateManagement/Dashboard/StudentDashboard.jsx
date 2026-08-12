import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  increaseAttendance,
  changeStatus,
} from "../Student/Student";

function Dashboard() {
  const dispatch = useDispatch();

  const student = useSelector(
    (state) => state.student
  );

  return (
    <div style={styles.container}>

      {/* Navbar */}

      <nav style={styles.navbar}>
        <h2>Student Portal</h2>

        <button style={styles.dashboardButton}>
          Dashboard
        </button>
      </nav>

      {/* Student Dashboard */}

      <div style={styles.dashboard}>

        <h1>Student Dashboard</h1>

        {/* Student Details */}

        <div style={styles.card}>

          <h2>Student Details</h2>

          <p>
            <b>Name:</b> {student.name}
          </p>

          <p>
            <b>Roll No:</b> {student.rollNo}
          </p>

          <p>
            <b>Branch:</b> {student.branch}
          </p>

          <p>
            <b>Attendance:</b>{" "}
            {student.attendance}%
          </p>

          <p>
            <b>Status:</b> {student.status}
          </p>

          <button
            onClick={() =>
              dispatch(increaseAttendance())
            }
            style={styles.button}
          >
            Increase Attendance
          </button>

          <button
            onClick={() =>
              dispatch(changeStatus())
            }
            style={styles.button}
          >
            Change Status
          </button>

        </div>

        {/* Courses */}

        <div style={styles.card}>

          <h2>Courses & Marks</h2>

          {student.courses.map((course) => (
            <div
              key={course.id}
              style={styles.course}
            >
              <span>{course.name}</span>

              <b>{course.marks}%</b>
            </div>
          ))}

        </div>

        {/* Summary */}

        <div style={styles.card}>

          <h2>Student Summary</h2>

          <p>
            <b>Total Courses:</b>{" "}
            {student.courses.length}
          </p>

          <p>
            <b>Attendance:</b>{" "}
            {student.attendance}%
          </p>

          <p>
            <b>Status:</b> {student.status}
          </p>

        </div>

      </div>

    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    fontFamily: "Arial",
    backgroundColor: "#f4f6f8",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#222",
    color: "white",
  },

  dashboardButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  dashboard: {
    width: "600px",
    margin: "40px auto",
  },

  card: {
    padding: "20px",
    marginBottom: "20px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 2px 8px #ddd",
  },

  course: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px",
    margin: "8px 0",
    backgroundColor: "#f5f5f5",
    borderRadius: "5px",
  },

  button: {
    padding: "10px 15px",
    margin: "5px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Dashboard;