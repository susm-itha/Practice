import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";

// Home Page
function Home() {
  return (
    <div>
      <h2>Bike Showroom</h2>
      <p>Welcome to our showroom.</p>
    </div>
  );
}

// About Page
function About() {
  return (
    <div>
      <h2>About</h2>
      <p>We sell Premium Bikes.</p>
    </div>
  );
}

// Bikes Page (Nested Routing)
function Bikes() {
  return (
    <div>
      <h2>Available Bikes</h2>

      <ul>
        <li><Link to="101">Royal Enfield</Link></li>
        <li><Link to="102">Yamaha R15</Link></li>
        <li><Link to="103">KTM Duke</Link></li>
      </ul>

      <Outlet />
    </div>
  );
}

// Dynamic Route
function BikeDetails() {
  const { id } = useParams();

  return (
    <div>
      <h3>Bike ID : {id}</h3>
    </div>
  );
}

// useNavigate Example
function Contact() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Contact Us</h2>

      <button onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
}

// Login Page
function Login() {
  return (
    <div>
      <h2>Login Page</h2>
      <p>Please login first.</p>
    </div>
  );
}

// Dashboard
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome Admin</p>
    </div>
  );
}

// Protected Route
function ProtectedRoute({ children }) {
  const isLogin = true; // false -> Login Page

  return isLogin ? children : <Navigate to="/login" />;
}

// 404 Page
function NotFound() {
  return (
    <div>
      <h2>404 Page Not Found</h2>
    </div>
  );
}

// Main App
function App() {
  return (
    <>
      <h1>Bike Showroom</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/bikes">Bikes</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/bikes" element={<Bikes />}>
          <Route path=":id" element={<BikeDetails />} />
        </Route>

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;