import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [message, setMessage] = useState("No Message");
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  // Receive message from child
  function getMessage(data) {
    setMessage(data);
  }

  // Receive name from child
  function getName(data) {
    setName(data);
  }

  // Update count from child
  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        margin: "20px",
      }}
    >
      <h1>Parent Component</h1>

      <h2>Message : {message}</h2>
      <h2>Name : {name}</h2>
      <h2>Count : {count}</h2>

      <Child
        sendMessage={getMessage}
        sendName={getName}
        increase={increaseCount}
      />
    </div>
  );
}

export default Parent;