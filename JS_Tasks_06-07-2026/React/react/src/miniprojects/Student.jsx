function Student(props) {
  return (
    <div>
      <h2>Student Details</h2>

      <p>Name : {props.susmitha}</p>
      <p>Course : {props.ASE}</p>

      <p>
        Status : {props.age >= 18 ? "Major" : "Minor"}
      </p>
    </div>
  );
}

export default Student;