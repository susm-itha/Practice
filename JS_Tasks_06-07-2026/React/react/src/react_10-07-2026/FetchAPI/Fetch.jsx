import { useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);

  // GET
  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await res.json();
    setData(result.slice(0, 3));
  };

  // POST
  const postData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React API" }),
    });
    alert("POST Success");
  };

  // PUT
  const putData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: 1, title: "Updated" }),
    });
    alert("PUT Success");
  };

  // PATCH
  const patchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Patched" }),
    });
    alert("PATCH Success");
  };

  // DELETE
  const deleteData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    });
    alert("DELETE Success");
  };

  return (
    <div>
      <h2>React</h2>

      <button onClick={getData}>GET</button>
      <button onClick={postData}>POST</button>
      <button onClick={putData}>PUT</button>
      <button onClick={patchData}>PATCH</button>
      <button onClick={deleteData}>DELETE</button>

      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default Fetch;