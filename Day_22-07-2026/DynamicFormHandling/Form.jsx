import React, { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: "",
    course: "",
    gender: "",
    agree: false,
    file: null,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setForm({
      ...form,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name === "") {
      setError("Enter your name");
      return;
    }

    if (form.course === "") {
      setError("Select course");
      return;
    }

    setError("");
    alert("Form Submitted");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Text Field */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />
        <br /><br />

        {/* Dropdown */}
        <select
          name="course"
          value={form.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option value="React">React</option>
          <option value="Java">Java</option>
        </select>
        <br /><br />

        {/* Radio Button */}
        Gender:
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}
        /> Male

        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
        /> Female
        <br /><br />

        {/* Checkbox */}
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
        />
        I Agree
        <br /><br />

        {/* File Input */}
        <input
          type="file"
          name="file"
          onChange={handleChange}
        />
        <br /><br />

        {/* Validation Error */}
        <p style={{ color: "red" }}>{error}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;