import { useState } from "react";

function Child({ sendMessage, sendName, increase }) {
  const [input, setInput] = useState("");

  function handleMessage() {
    sendMessage("Hello Parent!");
  }

  function handleName() {
    sendName(input);
  }

  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h1>Child Component</h1>

      <button onClick={handleMessage}>
        Send Message
      </button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter Name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleName}>
        Send Name
      </button>

      <br />
      <br />

      <button onClick={increase}>
        Increase Count
      </button>
    </div>
  );
}

export default Child;