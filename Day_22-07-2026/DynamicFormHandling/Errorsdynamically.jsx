import React, { useState } from "react";

function Errors() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update input value
    setForm({
      ...form,
      [name]: value
    });

    // Validate input
    setErrors({
      ...errors,
      [name]: value === "" ? `${name} is required` : ""
    });
  };

  return (
    <div>
      <h2>Student Form</h2>

      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={form.name}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.name}</p>

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={form.email}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.email}</p>

      <hr />

      <h3>Entered Details</h3>
      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
    </div>
  );
}

export default Errors;