import { Routes, Route, Link } from "react-router-dom";

// Home Page
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to React Router</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the About page.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Email: contact@gmail.com</p>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2>404 Page Not Found</h2>
    </div>
  );
}

function ReactApplication() {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>React Router - Multiple Pages</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default ReactApplication;