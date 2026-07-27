import React, { useEffect, useState } from "react";
import {
  fetchData,
  addData,
  updateData,
  patchData,
  deleteData,
} from "./Services"

function Services() {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  // GET API
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      setLoading(true);

      const data = await fetchData();

      setPosts(data.slice(0, 5));

      setSuccess("GET Request Successful");
    } catch (err) {
      setError("Failed to Fetch Data");
    } finally {
      setLoading(false);
    }
  };

  // POST
  const handlePost = async () => {
    await addData();
    setSuccess("POST Successful");
  };

  // PUT
  const handlePut = async () => {
    await updateData();
    setSuccess("PUT Successful");
  };

  // PATCH
  const handlePatch = async () => {
    await patchData();
    setSuccess("PATCH Successful");
  };

  // DELETE
  const handleDelete = async () => {
    await deleteData();
    setSuccess("DELETE Successful");
  };

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>API</h1>

      <h3>{success}</h3>

      <button onClick={handlePost}>POST</button>

      <button onClick={handlePut}>PUT</button>

      <button onClick={handlePatch}>PATCH</button>

      <button onClick={handleDelete}>DELETE</button>

      <hr />

      {posts.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{item.id}</h3>

          <h4>{item.title}</h4>

          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;