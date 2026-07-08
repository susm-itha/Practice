import Child from "./Child"
function Parent() {
  const studentName = "Susmitha";
  const studentAge = 22;
  const subjects = ["HTML", "CSS", "React"];

  const student = {
    name: "Susmitha",
    course: "React",
  };

  return (
    <div>
      <h1>Parent Component</h1>

      <Child title="Student Name" data={studentName} />
      <Child title="Student Age" data={studentAge} />
      <Child title="Subjects" data={subjects} />
      <Child title="Student Details" data={student} />
    </div>
  );
}

export default Parent;