function Child1({ sendData }) {

  const sendMessage = () => {
    sendData("Hello Child2! Message from Child1");
  };

  return (
    <div>
      <h3>Child 1</h3>

      <button onClick={sendMessage}>
        Send Message
      </button>
    </div>
  );
}

export default Child1;