import React, { useState, createContext, useContext } from "react";

// Context API
const NameContext = createContext();

// Child Component
function Child({ message, click }) {
  const name = useContext(NameContext);

  return (
    <>
      <h3>Props: {message}</h3>
      <h3>Context API: {name}</h3>
      <button onClick={click}>Child to Parent</button>
    </>
  );
}

// Sibling Components
function Sibling1({ text }) {
  return <h3>Sibling 1 : {text}</h3>;
}

function Sibling2({ text }) {
  return <h3>Sibling 2 : {text}</h3>;
}

// Student Component
function Student({ name, age }) {
  return (
    <h2>
      Student : {name} | Age : {age}
    </h2>
  );
}

// Main Component
function Major() {
  const [count, setCount] = useState(0);

  const username = "Susmitha";

  const fruits = ["Apple", "Mango", "Orange"];

  function greet() {
    return "Good Morning";
  }

  function showAlert() {
    alert("Hello Parent");
  }

  return (
    <NameContext.Provider value="React Context">
      <>
        <h1>React</h1>

        {/* Calling Function */}
        <h2>{greet()}</h2>

        {/* Dynamic Rendering */}
        <h2>Hello {username}</h2>

        {/* State */}
        <h2>Count : {count}</h2>

        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>

        <hr />

        {/* Parent to Child + Child to Parent */}
        <Child
          message="Hello Child"
          click={showAlert}
        />

        <hr />

        {/* Sibling Communication */}
        <Sibling1 text="Shared Data" />
        <Sibling2 text="Shared Data" />

        <hr />

        {/* Conditional Rendering */}
        <h2>{count > 3 ? "Count is High" : "Count is Low"}</h2>

        <hr />

        {/* List Rendering */}
        <h2>Fruits</h2>

        <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>

        <hr />

        {/* Event Handling */}
        <button onClick={() => alert("Button Clicked")}>
          Click Me
        </button>

        <hr />

        {/* Multiple Props */}
        <Student name="Susmitha" age={24} />
      </>
    </NameContext.Provider>
  );
}

export default Major;