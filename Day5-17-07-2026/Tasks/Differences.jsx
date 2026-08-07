import React, { useState, createContext, useContext, useReducer } from "react";
import axios from "axios";

const NameContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function FunctionalComponent() {
  return <h3>Functional Component</h3>;
}

class ClassComponent extends React.Component {
  render() {
    return <h3>Class Component</h3>;
  }
}

// -------------------- Props Example --------------------
function Child(props) {
  return <h3>Props: {props.name}</h3>;
}

// -------------------- Context API Example --------------------
function Context() {
  const name = useContext(NameContext);
  return <h3>Context API: {name}</h3>;
}

function Differences() {
  // State
  const [color, setColor] = useState("Red");

  // useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // Fetch API
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => alert("Fetch: " + data.name));
  };

  // Axios
  const axiosData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/2")
      .then((res) => alert("Axios: " + res.data.name));
  };

  return (
    <NameContext.Provider value="Susmitha">
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Comparison</h1>

        {/* Functional vs Class */}
        <FunctionalComponent />
        <ClassComponent />

        <hr />

        {/* Props */}
        <Child name="Student" />

        <hr />

        {/* State */}
        <h3>State: {color}</h3>
        <button onClick={() => setColor("Blue")}>Change State</button>

        <hr />

        {/* Context API */}
        <Context />

        <hr />

        {/* useReducer */}
        <h3>useReducer Count: {state.count}</h3>
        <button onClick={() => dispatch({ type: "ADD" })}>
          Increment
        </button>

        <hr />

        {/* Fetch API */}
        <button onClick={fetchData}>Fetch API</button>

        <br />
        <br />

        {/* Axios */}
        <button onClick={axiosData}>Axios</button>
      </div>
    </NameContext.Provider>
  );
}

export default Differences;