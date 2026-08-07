import React from "react";

function Fragments() {
  const Courses = ["Java", "Html", "React"];

  return (
    <>
      <h1>React Fragments</h1>

      <hr />
      <h2>1. Normal HTML Wrapper (div)</h2>

      <div>
        <h3>Student Details</h3>
        <p>Name: Susmitha</p>
        <p>Course: React</p>
      </div>

      <hr />
      <h2>2. Using React.Fragment</h2>

      <React.Fragment>
        <h3>Employee Details</h3>
        <p>Name: Susmitha</p>
        <p>Role: Web Developer</p>
      </React.Fragment>

      <hr />
      <h2>3. Using &lt;&gt; &lt;/&gt;</h2>

      <>
        <h3>Company Details</h3>
        <p>Company: NYV</p>
        <p>Location: Hyderabad</p>
      </>

      <hr />
      <h2>4. Fragment with map()</h2>

      {Courses.map((Courses, index) => (
        <React.Fragment key={index}>
          <p>{Courses}</p>
        </React.Fragment>
      ))}

      <hr />
      <h2>5. Multiple Elements</h2>

      <>
        <h3>Welcome</h3>
        <p>Learning React Fragments</p>
        <button>Click Me</button>
      </>
    </>
  );
}

export default Fragments;