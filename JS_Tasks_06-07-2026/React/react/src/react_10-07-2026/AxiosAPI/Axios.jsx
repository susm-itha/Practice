import axios from "Axios";

function Axios() {

  // Common Axios Configuration
  const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });

  // GET
  const getData = () => {
    api.get("/users")
      .then((res) => console.log("GET:", res.data));
  };

  // POST
  const postData = () => {
    api.post("/posts", {
      title: "React",
      body: "Axios",
    })
    .then((res) => console.log("POST:", res.data));
  };

  // PUT
  const putData = () => {
    api.put("/posts/1", {
      title: "Updated",
    })
    .then((res) => console.log("PUT:", res.data));
  };

  // PATCH
  const patchData = () => {
    api.patch("/posts/1", {
      title: "New Title",
    })
    .then((res) => console.log("PATCH:", res.data));
  };

  // DELETE
  const deleteData = () => {
    api.delete("/posts/1")
      .then(() => console.log("DELETE: Success"));
  };

  // Fetch API Example
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => console.log("FETCH:", data));
  };

  return (
    <div>
      <button onClick={getData}>GET</button>
      <button onClick={postData}>POST</button>
      <button onClick={putData}>PUT</button>
      <button onClick={patchData}>PATCH</button>
      <button onClick={deleteData}>DELETE</button>
      <button onClick={fetchData}>FETCH</button>
    </div>
  );
}

export default Axios;