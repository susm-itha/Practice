import { useState } from "react";
import { createPortal } from "react-dom";

function Portal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>React Portal </h1>

      <button onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      {showModal &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                width: "300px",
                textAlign: "center",
              }}
            >
              <h2>React Portal</h2>

              <p>
                This modal is rendered using
                <br />
                <b>ReactDOM.createPortal()</b>
              </p>

              <button onClick={() => setShowModal(false)}>
                Close
              </button>
            </div>
          </div>,
          document.getElementById("portal-root")
        )}
    </div>
  );
}

export default Portal;