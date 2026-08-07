import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Button from "./Button";

function Parent() {

  // State Management
  const [message, setMessage] = useState("Welcome");
  const [students, setStudents] = useState([
    "Susmitha",
    "manasu",
    "Teju"
  ]);

  // Child to Parent
  const receiveData = (data) => {
    setMessage(data);
  };

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "15px",
        marginTop: "20px",
      }}
    >
      <h2>Parent Component</h2>

      {/* Parent to Child */}
      <Child1
        text={message}
        sendData={receiveData}
      />

      {/* Child to Child */}
      <Child2 message={message} />

      <hr />

      <h3>Reusable Components</h3>

      <Button text="Save" />
      <Button text="Update" />
      <Button text="Delete" />

      <hr />

      <h3>Dynamic Rendering</h3>

      {students.map((student, index) => (
        <p key={index}>{student}</p>
      ))}
    </div>
  );
}

export default Parent;