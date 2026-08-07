import { useState } from "react";
import Child from "./Child";

function Parent() {

  const [message, setMessage] = useState("");

  return (
    <div>

      <h2>Parent Component</h2>

      <p>{message}</p>

      <Child sendData={setMessage} />

    </div>
  );
}

export default Parent;