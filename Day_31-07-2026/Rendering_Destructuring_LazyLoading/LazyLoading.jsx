import React, { useState, lazy, Suspense } from "react";

// Lazy Components
const Samsung = lazy(() =>
  Promise.resolve({
    default: function Samsung() {
      return (
        <div style={box}>
          <h2>Samsung Phone</h2>
          <p>Model : Galaxy S25</p>
          <p>Price : ₹80,000</p>
        </div>
      );
    },
  })
);

const Apple = lazy(() =>
  Promise.resolve({
    default: function Apple() {
      return (
        <div style={box}>
          <h2>Apple Phone</h2>
          <p>Model : iPhone 17</p>
          <p>Price : ₹90,000</p>
        </div>
      );
    },
  })
);

const Vivo = lazy(() =>
  Promise.resolve({
    default: function Vivo() {
      return (
        <div style={box}>
          <h2>Vivo Phone</h2>
          <p>Model : Vivo V60</p>
          <p>Price : ₹35,000</p>
        </div>
      );
    },
  })
);

const box = {
  border: "2px solid blue",
  padding: "15px",
  marginTop: "20px",
  width: "250px",
};

function LazyLoading() {
  const [phone, setPhone] = useState("");

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Phone Management App</h1>

      {/* Normal Component */}
      <h3>Select a Phone Brand</h3>

      <button onClick={() => setPhone("Samsung")}>Samsung</button>

      <button onClick={() => setPhone("Apple")} style={{ marginLeft: "10px" }}>
        Apple
      </button>

      <button onClick={() => setPhone("Vivo")} style={{ marginLeft: "10px" }}>
        Vivo
      </button>

      <hr />

      <Suspense fallback={<h2>Loading Phone Details...</h2>}>
        {phone === "Samsung" && <Samsung />}
        {phone === "Apple" && <Apple />}
        {phone === "Vivo" && <Vivo />}
      </Suspense>
    </div>
  );
}

export default LazyLoading;