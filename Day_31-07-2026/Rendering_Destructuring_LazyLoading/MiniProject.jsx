import React, {
  useState,
  useMemo,
  useCallback,
  memo,
  lazy,
  Suspense,
  PureComponent,
} from "react";
import ReactDOM from "react-dom";

// ------------------- Custom Hook -------------------
function useCounter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);

  return { count, increase };
}

// ------------------- HOC -------------------
function withLogger(Component) {
  return function NewComponent(props) {
    console.log("Component Rendered");
    return <Component {...props} />;
  };
}

// ------------------- Pure Component -------------------
class Welcome extends PureComponent {
  render() {
    return <h3>Pure Component</h3>;
  }
}

// ------------------- React.memo -------------------
const Employee = memo(function Employee({ emp, remove }) {
  const { id, name, department, salary } = emp;

  console.log("Employee Render :", name);

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h3>{name}</h3>
      <p>Department : {department}</p>
      <p>Salary : ₹{salary}</p>

      <button onClick={() => remove(id)}>Delete</button>
    </div>
  );
});

// ------------------- Lazy Loading -------------------
const About = lazy(() =>
  Promise.resolve({
    default: () => (
      <div
        style={{
          background: "lightblue",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <h2>Lazy Loaded Component</h2>
      </div>
    ),
  })
);

// ------------------- Portal -------------------
function PortalPopup({ close }) {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: "100px",
        left: "35%",
        background: "white",
        border: "2px solid black",
        padding: "20px",
      }}
    >
      <h2>React Portal Popup</h2>

      <button onClick={close}>Close</button>
    </div>,
    document.getElementById("portal")
  );
}

// ------------------- Main Component -------------------
function Dashboard() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const [employees, setEmployees] = useState([]);

  const [show, setShow] = useState(false);

  const { count, increase } = useCounter();

  // Event Binding
  function addEmployee(e) {
    e.preventDefault();

    if (!name || !department || !salary) return;

    setEmployees([
      ...employees,
      {
        id: Date.now(),
        name,
        department,
        salary: Number(salary),
      },
    ]);

    setName("");
    setDepartment("");
    setSalary("");
  }

  // useCallback
  const removeEmployee = useCallback((id) => {
    setEmployees((old) => old.filter((e) => e.id !== id));
  }, []);

  // useMemo
  const totalSalary = useMemo(() => {
    console.log("Calculating Salary...");
    return employees.reduce((sum, e) => sum + e.salary, 0);
  }, [employees]);

  return (
    <>
      {/* Fragment */}

      <h1>Employee Management</h1>

      <form onSubmit={addEmployee}>
        <input
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <br />
        <br />

        <button>Add Employee</button>
      </form>

      <hr />

      <h2>Counter : {count}</h2>

      <button onClick={increase}>Increase Counter</button>

      <hr />

      <h2>Total Salary : ₹{totalSalary}</h2>

      {/* List Rendering */}

      {employees.map((emp) => (
        <Employee key={emp.id} emp={emp} remove={removeEmployee} />
      ))}

      <hr />

      <button onClick={() => setShow(true)}>Show Portal</button>

      {show && <PortalPopup close={() => setShow(false)} />}

      <hr />

      <Welcome />

      <Suspense fallback={<h2>Loading...</h2>}>
        <About />
      </Suspense>
    </>
  );
}

export default Dashboard;