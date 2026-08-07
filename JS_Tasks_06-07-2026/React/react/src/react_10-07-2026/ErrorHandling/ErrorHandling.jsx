import { useState } from "react";

function Error() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const getUsers = async () => {
    setError("");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      // Invalid Response
      if (!response.ok) {
        throw new Error("Data not found");
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      // Network Failure
      setError("Failed to fetch data. Check your internet connection.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>

      <button onClick={getUsers}>Get Users</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Error;