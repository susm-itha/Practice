function Child1({ text, sendData }) {
  return (
    <div
      style={{
        border: "1px solid blue",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>Child 1</h3>

      <p>
        Message from Parent : <b>{text}</b>
      </p>

      <button
        onClick={() =>
          sendData("Hello Parent! Message from Child 1")
        }
      >
        Send to Parent
      </button>
    </div>
  );
}

export default Child1;