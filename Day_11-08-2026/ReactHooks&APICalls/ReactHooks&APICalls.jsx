import React, { useEffect, useRef, useState } from "react";
import "./ReactHooks&APICalls.css";

function REACTHOOK() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState("dashboard");

  const searchRef = useRef();

  // Fetch API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Search Users
  const searchUsers = () => {
    const searchValue = searchRef.current.value.toLowerCase();

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const filteredUsers = data.filter((user) =>
          user.name.toLowerCase().includes(searchValue)
        );

        setUsers(filteredUsers);
      });
  };

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>My Dashboard</h2>

        <ul>
          <li onClick={() => setPage("dashboard")}>
            Dashboard
          </li>

          <li onClick={() => setPage("users")}>
            Users
          </li>

          <li onClick={() => setPage("reports")}>
            Reports
          </li>

          <li onClick={() => setPage("settings")}>
            Settings
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main">

        {/* Dashboard Page */}
        {page === "dashboard" && (
          <>
            <h1>Dashboard</h1>
            <p>Welcome to the Dashboard</p>

            <div className="cards">

              <div className="card">
                <h3>Total Users</h3>
                <h2>{users.length}</h2>
              </div>

              <div className="card">
                <h3>API Status</h3>
                <h2>
                  {loading ? "Loading" : "Active"}
                </h2>
              </div>

              <div className="card">
                <h3>Data Source</h3>
                <h2>REST API</h2>
              </div>

            </div>
          </>
        )}

        {/* Users Page */}
        {page === "users" && (
          <>
            <h1>Users</h1>
            <p>All users from API</p>

            {/* Search */}
            <div className="search-box">

              <input
                ref={searchRef}
                type="text"
                placeholder="Search user..."
              />

              <button onClick={searchUsers}>
                Search
              </button>

            </div>

            {/* Loading */}
            {loading && (
              <div className="message">
                Loading users...
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="error">
                Error: {error}
              </div>
            )}

            {/* Users Table */}
            {!loading && !error && (
              <div className="table-container">

                <table>

                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>City</th>
                      <th>Company</th>
                    </tr>
                  </thead>

                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                        <td>{user.company.name}</td>
                      </tr>
                    ))}
                  </tbody>

                </table>

              </div>
            )}
          </>
        )}

        {/* Reports Page */}
        {page === "reports" && (
          <>
            <h1>Reports</h1>
            <p>Reports will be displayed here.</p>
          </>
        )}

        {/* Settings Page */}
        {page === "settings" && (
          <>
            <h1>Settings</h1>
            <p>Settings will be displayed here.</p>
          </>
        )}

      </main>
    </div>
  );
}
export default REACTHOOK;


