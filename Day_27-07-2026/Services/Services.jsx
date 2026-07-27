import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts";

// FETCH API

// GET
export const fetchData = async () => {
  const response = await fetch(URL);
  return response.json();
};

//AXIOS 

// POST
export const addData = async () => {
  return axios.post(URL, {
    title: "Susmitha",
    body: "Web Developer",
    userId: 1,
  });
};

// PUT
export const updateData = async () => {
  return axios.put(URL + "/1", {
    id: 1,
    title: "Updated Title",
    body: "Updated Body",
    userId: 1,
  });
};

// PATCH
export const patchData = async () => {
  return axios.patch(URL + "/1", {
    title: "Patched Title",
  });
};

// DELETE
export const deleteData = async () => {
  return axios.delete(URL + "/1");
};