import React, { useState } from "react";

function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    details: "",
  });

  const [error, setError] = useState({});

  // Single Change Handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation
  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    if (form.name === "") {
      errors.name = "Name is required";
    }

    if (form.email === "") {
      errors.email = "Email is required";
    }

    if (form.password === "") {
      errors.password = "Password is required";
    }

    if (form.role === "") {
      errors.role = "Select Role";
    }

    if (form.details === "") {
      errors.details = "This field is required";
    }

    setError(errors);

    if (Object.keys(errors).length === 0) {
      alert("Registration Successful");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <span style={{ color: "red" }}>{error.name}</span>
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <span style={{ color: "red" }}>{error.email}</span>
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <span style={{ color: "red" }}>{error.password}</span>
        <br /><br />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
        >
          <option value="">Select Role</option>
          <option value="Student">Student</option>
          <option value="Employee">Employee</option>
        </select>

        <br />
        <span style={{ color: "red" }}>{error.role}</span>
        <br /><br />

        {/* Dynamic Field */}

        {form.role === "Student" && (
          <input
            type="text"
            name="details"
            placeholder="Enter College Name"
            value={form.details}
            onChange={handleChange}
          />
        )}

        {form.role === "Employee" && (
          <input
            type="text"
            name="details"
            placeholder="Enter Company Name"
            value={form.details}
            onChange={handleChange}
          />
        )}

        <br />
        <span style={{ color: "red" }}>{error.details}</span>
        <br /><br />
        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default RegistrationForm;