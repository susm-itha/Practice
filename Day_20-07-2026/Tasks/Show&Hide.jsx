import React, { useState } from "react";

function Message() {
  return (
    <div>
      <h2>Details</h2>
      <p>Susmitha</p>
      <p>Nyb</p>
    </div>
  );
}

function ShowHide() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Component" : "Show Component"}
      </button>

      <br />
      <br />

      {show && <Message />}
    </div>
  );
}

export default ShowHide;