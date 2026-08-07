import React, { useEffect, useState } from "react";
import axios from "axios";

function Apicalls() {
  // Fetch State
  const [fetchUsers, setFetchUsers] = useState([]);

  // Axios State
  const [axiosUsers, setAxiosUsers] = useState([]);

  // Fetch API
  const getFetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setFetchUsers(data);
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  // Axios API
  const getAxiosUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setAxiosUsers(response.data);
    } catch (error) {
      console.log("Axios Error:", error);
    }
  };

  useEffect(() => {
    getFetchUsers();
    getAxiosUsers();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Fetch API & Axios API</h1>

      {/* Fetch API */}
      <div
        style={{
          border: "2px solid blue",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <h2>Fetch API</h2>

        {fetchUsers.map((user) => (
          <div key={user.id}>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
            <hr />
          </div>
        ))}
      </div>

      {/* Axios API */}
      <div
        style={{
          border: "2px solid green",
          padding: "10px",
        }}
      >
        <h2>Axios API</h2>

        {axiosUsers.map((user) => (
          <div key={user.id}>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apicalls;