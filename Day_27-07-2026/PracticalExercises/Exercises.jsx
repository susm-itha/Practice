import React, { useState, useEffect, memo } from "react";

const UserCard = memo(({ user }) => {
  console.log("UserCard Render:", user.id);

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
});

// Parent Component
function Exercises() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  console.log("App Render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>React.memo </h1>

      <h2>Parent Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>

      <hr />

      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Exercises;