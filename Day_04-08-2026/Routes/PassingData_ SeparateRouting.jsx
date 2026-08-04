import { Routes, Route, useNavigate, useLocation, Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const student = {
    id: 101,
    name: "Susmitha",
    course: "React JS",
  };

  return (
    <div>
      <h2>Home Page</h2>

      <button onClick={() => navigate("student", { state: student })}>
        View Student
      </button>
    </div>
  );
}

function Student() {
  const location = useLocation();
  const student = location.state;

  return (
    <div>
      <h2>Student Details</h2>

      {student ? (
        <>
          <h3>ID : {student.id}</h3>
          <h3>Name : {student.name}</h3>
          <h3>Course : {student.course}</h3>
        </>
      ) : (
        <h3>No Student Data</h3>
      )}

      <br />

      <Link to="/Data">Back</Link>
    </div>
  );
}

function Data() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="student" element={<Student />} />
    </Routes>
  );
}
export default Data;