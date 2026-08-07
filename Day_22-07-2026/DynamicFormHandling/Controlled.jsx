import React, { useState } from "react";

function Controlled() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Controlled Component</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Name: {name}</h3>
    </div>
  );
}

export default Controlled;