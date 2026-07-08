import { useState } from "react";
import Child from "../Props-State/Child";
function Parent() {

  const [course, setCourse] = useState("React");

  function changeCourse() {
    setCourse("JavaScript");
  }

  return (
    <div>
      <h1>Parent Component</h1>

      <Child
        name="Susmitha"
        course={course}
        />

      <button onClick={changeCourse}>
        Change Course
      </button>
    </div>
  );
}

export default Parent;