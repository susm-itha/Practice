import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to Bike Showroom</p>
    </div>
  );
}

function Bikes() {
  return (
    <div>
      <h2>Bikes Page</h2>
      <ul>
        <li>Royal Enfield</li>
        <li>Yamaha R15</li>
        <li>KTM Duke</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Email: bikes@gmail.com</p>
    </div>
  );
}
function Navigation() {
  return (
      <div style={{ padding: "20px" }}>
        <h1>Bike Showroom</h1>

        {/* Navigation */}
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/bikes">Bikes</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        <hr />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  );
}
export default Navigation;