import React, { useState, useEffect } from "react";

/* ===========================
      Custom Hook - API
=========================== */

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

/* ===========================
   Custom Hook - Form
=========================== */

function useForm(initialValue) {
  const [form, setForm] = useState(initialValue);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return { form, handleChange };
}

/* ===========================
 Window Resize Hook
=========================== */

function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return width;
}

/* ===========================
 Theme Hook
=========================== */

function useTheme() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return { theme, toggleTheme };
}

/* ===========================
   API Component
=========================== */

function Users() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <h2>Users</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        data.slice(0, 5).map((user) => (
          <p key={user.id}>{user.name}</p>
        ))
      )}
    </div>
  );
}

/* ===========================
   Reuse API Hook
=========================== */

function Posts() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div>
      <h2>Posts</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        data.slice(0, 5).map((post) => (
          <p key={post.id}>{post.title}</p>
        ))
      )}
    </div>
  );
}

/* ===========================
 Form Component
=========================== */

function StudentForm() {
  const { form, handleChange } = useForm({
    name: "",
    company: "",
  });

  return (
    <div>
      <h2>Student Form</h2>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
      />

      <h4>Name : {form.name}</h4>
      <h4>Company : {form.company}</h4>
    </div>
  );
}

/* ===========================
 Window Component
=========================== */

function WindowInfo() {
  const width = useWindowSize();

  return (
    <div>
      <h2>Window Width</h2>
      <h3>{width}px</h3>
    </div>
  );
}

/* ===========================
 Theme Component
=========================== */

function ThemeBox() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h2>{theme.toUpperCase()} THEME</h2>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

/* ===========================
      App
=========================== */

function HOOKS() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Reusable Custom Hooks</h1>

      <Users />

      <hr />

      <Posts />

      <hr />

      <StudentForm />

      <hr />

      <WindowInfo />

      <hr />

      <ThemeBox />
    </div>
  );
}
export default HOOKS;