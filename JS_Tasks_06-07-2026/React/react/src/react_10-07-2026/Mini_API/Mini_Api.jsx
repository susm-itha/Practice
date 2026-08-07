import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users";

// ---------------- GET (Fetch) ----------------
export async function getUsers() {
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}

// ---------------- POST (Axios) ----------------
export async function addUser(user) {
  const response = await axios.post(URL, user);
  return response.data;
}

// ---------------- PUT ----------------
export async function updateUser(id, user) {
  const response = await axios.put(`${URL}/${id}`, user);
  return response.data;
}

// ---------------- PATCH ----------------
export async function patchUser(id, user) {
  const response = await axios.patch(`${URL}/${id}`, user);
  return response.data;
}

// ---------------- DELETE ----------------
export async function deleteUser(id) {
  const response = await axios.delete(`${URL}/${id}`);
  return response.data;
}