import React, { useState } from "react";

function REACTF() {
  // Controlled form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    skills: [""],
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Dynamic skill field
  const handleSkillChange = (index, value) => {
    const newSkills = [...form.skills];
    newSkills[index] = value;

    setForm({
      ...form,
      skills: newSkills,
    });
  };

  const addSkill = () => {
    setForm({
      ...form,
      skills: [...form.skills, ""],
    });
  };

  const removeSkill = (index) => {
    const newSkills = form.skills.filter((_, i) => i !== index);

    setForm({
      ...form,
      skills: newSkills,
    });
  };

  // Form validation
  const validate = () => {
    let newErrors = {};

    if (!form.name) {
      newErrors.name = "Name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.phone) {
      newErrors.phone = "Phone number is required";
    } else if (form.phone.length !== 10) {
      newErrors.phone = "Phone must contain 10 digits";
    }

    if (!form.gender) {
      newErrors.gender = "Select gender";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Registration Successful!");
      console.log(form);
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <p>{errors.name}</p>

        {/* Email */}
        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <p>{errors.email}</p>

        {/* Password */}
        <label>Password:</label>
        <br />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <p>{errors.password}</p>

        {/* Phone */}
        <label>Phone:</label>
        <br />
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        <p>{errors.phone}</p>

        {/* Gender */}
        <label>Gender:</label>
        <br />

        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <p>{errors.gender}</p>

        {/* Dynamic Fields */}
        <label>Skills:</label>

        {form.skills.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              value={skill}
              placeholder="Enter skill"
              onChange={(e) =>
                handleSkillChange(index, e.target.value)
              }
            />

            <button
              type="button"
              onClick={() => removeSkill(index)}
            >
              Remove
            </button>
          </div>
        ))}

        <br />

        <button type="button" onClick={addSkill}>
          Add Skill
        </button>

        <br />
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default REACTF;