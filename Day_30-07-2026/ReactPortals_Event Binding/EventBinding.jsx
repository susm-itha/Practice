import { useState } from "react";

function Event() {
  const [showForm, setShowForm] = useState(false);

  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    department: "",
  });

  // Click Event (Function Reference)
  function openForm() {
    setShowForm(true);
  }

  // Change Event
  function handleChange(event) {
    setEmployee({
      ...employee,
      [event.target.name]: event.target.value,
    });
  }

  // Submit Event
  function handleSubmit(event) {
    event.preventDefault();
    alert("Employee Details Submitted Successfully");
  }

  // Focus Event
  function handleFocus() {
    console.log("Input Focused");
  }

  // Blur Event
  function handleBlur() {
    console.log("Input Lost Focus");
  }

  // Pass Parameter (Inline Event)
  function showMessage(name) {
    alert("Welcome " + name);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Employee Details</h1>

      {/* Click Event */}
      <button onClick={openForm}>
        Enter Employee Details
      </button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <br />

          <input
            type="text"
            name="id"
            placeholder="Employee ID"
            value={employee.id}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <br /><br />

          <input
            type="text"
            name="name"
            placeholder="Employee Name"
            value={employee.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <br /><br />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={employee.department}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <br /><br />

          <button type="submit">
            Submit
          </button>

          <button
            type="button"
            onClick={() => showMessage(employee.name)}
            style={{ marginLeft: "10px" }}
          >
            Welcome Employee
          </button>
        </form>
      )}

      {employee.name && (
        <div
          style={{
            marginTop: "20px",
            border: "2px solid black",
            padding: "15px",
            width: "300px",
          }}
        >
          <h3>Employee Information</h3>

          <p><b>ID :</b> {employee.id}</p>
          <p><b>Name :</b> {employee.name}</p>
          <p><b>Department :</b> {employee.department}</p>
        </div>
      )}
    </div>
  );
}
export default Event;