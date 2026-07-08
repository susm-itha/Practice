function Child2({ message }) {
  return (
    <div
      style={{
        border: "1px solid green",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>Child 2</h3>

      <p>
        Message from Child 1 (through Parent):
        <b> {message}</b>
      </p>
    </div>
  );
}

export default Child2;