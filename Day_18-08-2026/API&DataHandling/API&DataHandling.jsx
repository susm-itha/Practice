import React, { useEffect, useState } from "react";

function APID() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API = "https://jsonplaceholder.typicode.com/users";

  // GET API
  const getUsers = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API}?_limit=5`);

      if (!response.ok) {
        throw new Error("API Error");
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // POST API
  const addUser = async () => {
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "New User",
        email: "newuser@gmail.com",
      }),
    });

    const data = await response.json();

    setUsers([...users, data]);

    alert("User Added");
  };

  // DELETE API
  const deleteUser = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    setUsers(users.filter((user) => user.id !== id));

    alert("User Deleted");
  };

  // PUT API
  const updateUser = async (id) => {
    const response = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Updated User",
        email: "updated@gmail.com",
      }),
    });

    const data = await response.json();

    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, ...data } : user
      )
    );

    alert("User Updated");
  };

  // Load API
  useEffect(() => {
    getUsers();
  }, []);

  // Search / Filter
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>User Dashboard</h1>

      <p>Total Users: {users.length}</p>

      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={getUsers}>Refresh</button>
      <button onClick={addUser}>Add User</button>

      <hr />

      {/* Loading State */}
      {loading && <h3>Loading...</h3>}

      {/* Error Handling */}
      {error && <h3>Error: {error}</h3>}

      {/* API Response */}
      {!loading && !error && (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td>
                  <button onClick={() => updateUser(user.id)}>
                    PUT
                  </button>

                  <button onClick={() => deleteUser(user.id)}>
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!loading && filteredUsers.length === 0 && (
        <p>No users found</p>
      )}
    </div>
  );
}
export default APID;