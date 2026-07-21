import React, { useEffect, useState } from "react";

function APIintegration() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        setPosts(data);
      } catch {
        setError("API Error!");
      } finally {
        setLoading(false);
      }
    }

    getPosts();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>Posts</h2>

      {posts.slice(0, 5).map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
        </div>
      ))}
    </div>
  );
}
export default APIintegration;