import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {

  const [message, setMessage] = useState("");

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        width: "500px",
        margin: "20px auto",
      }}
    >
      <h2>Parent Component</h2>

      {/* Child1 sends data to Parent */}
      <Child1 sendData={setMessage} />

      <hr />

      {/* Parent sends data to Child2 */}
      <Child2 message={message} />
    </div>
  );
}

export default Parent;