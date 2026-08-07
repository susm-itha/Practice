import React, { useState } from "react";
import ReactDOM from "react-dom";

function Modals() {
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Modal Component
  function Modal() {
    return ReactDOM.createPortal(
      <div style={overlay}>
        <div style={box}>
          <h2>Car Details</h2>
          <p>Car Name : BMW</p>
          <p>Color : Black</p>
          <p>Price : ₹50 Lakhs</p>

          <button onClick={() => setShowModal(false)}>
            Close
          </button>
        </div>
      </div>,
      document.getElementById("portal-root")
    );
  }

  // Popup Component
  function Popup() {
    return ReactDOM.createPortal(
      <div style={popupStyle}>
        <p>Car Booked Successfully!</p>

        <button onClick={() => setShowPopup(false)}>
          OK
        </button>
      </div>,
      document.getElementById("portal-root")
    );
  }

  // Tooltip Component
  function Tooltip() {
    return ReactDOM.createPortal(
      <div style={tooltipStyle}>
        BMW Top Speed : 250 km/h
      </div>,
      document.getElementById("portal-root")
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Portal</h1>

      <button onClick={() => setShowModal(true)}>
        Show Car Modal
      </button>

      <br /><br />

      <button onClick={() => setShowPopup(true)}>
        Book Car
      </button>

      <br /><br />

      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        Hover for Speed
      </button>

      {showModal && <Modal />}
      {showPopup && <Popup />}
      {showTooltip && <Tooltip />}
    </div>
  );
}

// Styles

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const box = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "300px",
  textAlign: "center",
};

const popupStyle = {
  position: "fixed",
  top: "20px",
  right: "20px",
  background: "green",
  color: "white",
  padding: "15px",
  borderRadius: "10px",
};

const tooltipStyle = {
  position: "fixed",
  top: "250px",
  left: "45%",
  background: "black",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
};

export default Modals;