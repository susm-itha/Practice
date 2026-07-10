import { useEffect, useState } from "react";

import {
  getUsers,
  addUser,
  updateUser,
  patchUser,
  deleteUser,
} from "../Mini_API/Mini_Api";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // GET
  async function fetchUsers() {
    setLoading(true);
    setError("");

    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  // POST
  async function handleAdd() {
    const data = await addUser({
      name: "Susmitha",
    });

    alert("POST Success");

    console.log(data);
  }

  // PUT
  async function handlePut() {
    const data = await updateUser(1, {
      name: "Updated User",
    });

    alert("PUT Success");

    console.log(data);
  }

  // PATCH
  async function handlePatch() {
    const data = await patchUser(1, {
      name: "Patched Name",
    });

    alert("PATCH Success");

    console.log(data);
  }

  // DELETE
  async function handleDelete() {
    await deleteUser(1);

    alert("DELETE Success");
  }

  return (
    <div>

      <h2>Users List</h2>

      {loading && <h3>Loading...</h3>}

      {error && <h3>{error}</h3>}

      {users.map((user) => (
        <p key={user.id}>
          {user.id} - {user.name}
        </p>
      ))}

      <br />

      <button onClick={handleAdd}>
        POST
      </button>

      <button onClick={handlePut}>
        PUT
      </button>

      <button onClick={handlePatch}>
        PATCH
      </button>

      <button onClick={handleDelete}>
        DELETE
      </button>

    </div>
  );
}

export default Users;