import React, { useState } from "react";

function Dynamic() {
  const [form, setForm] = useState({
    name: "",
    company: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="company"
        placeholder="Enter Company"
        onChange={handleChange}
      />

      <h3>Name : {form.name}</h3>
      <h3>Company : {form.company}</h3>
    </div>
  );
}

export default Dynamic;