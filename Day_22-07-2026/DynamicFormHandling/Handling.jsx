import React, { useState } from "react";

function Handling() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <h2>Dynamic Input Fields</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={form.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={form.email}
        onChange={handleChange}
      />

      <h3>Name: {form.name}</h3>
      <h3>Email: {form.email}</h3>
    </div>
  );
}

export default Handling;