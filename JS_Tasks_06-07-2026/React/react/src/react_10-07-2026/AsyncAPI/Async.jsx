import { useState } from "react";

function Async() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getUsers() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>

      {loading && <h3>Loading...</h3>}

      {error && <h3>{error}</h3>}

      {!loading &&
        users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
    </div>
  );
}

export default Async;