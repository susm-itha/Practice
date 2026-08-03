import { Link, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to Food Paradise!</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>We serve delicious food.</p>
    </div>
  );
}

function Services() {
  return (
    <div>
      <h2>Services Page</h2>
      <ul>
        <li>Pizza</li>
        <li>Burger</li>
        <li>Salads</li>
        <li>Drinks</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Phone: 9876543210</p>
    </div>
  );
}

function MINIP() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Food Paradise</h1>

      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/services">Services</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default MINIP;