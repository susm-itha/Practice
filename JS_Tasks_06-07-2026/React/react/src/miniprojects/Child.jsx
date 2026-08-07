function Child(props) {

  return (
    <div>
      <h3>Child Component</h3>

      <button onClick={() => props.sendData("Hello Parent")}>
        Send Message
      </button>
    </div>
  );
}

export default Child;