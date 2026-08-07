import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

// Home Page
function Home() {
  const navigate = useNavigate();

  return (
    <div align="center">
      <h1> Home Page</h1>

      <Link to="/">Home</Link> |{" "}
      <Link to="/dashboard">Dashboard</Link>

      <br /><br />

      <button onClick={() => navigate("/about")}>
        Go to About
      </button>
    </div>
  );
}

// About Page
function About() {
  return (
    <div align="center">
      <h1>About Page</h1>
      <p>Welcome to React Router Demo</p>

      <Link to="/">Home</Link>
    </div>
  );
}

// Login Page
function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  function login() {
    setIsLoggedIn(true);
    navigate("/dashboard");
  }

  return (
    <div align="center">
      <h1> Login Page</h1>

      <button onClick={login}>Login</button>

      <br /><br />

      <Link to="/">Home</Link>
    </div>
  );
}

// Dashboard Page
function Dashboard({ setIsLoggedIn }) {
  const navigate = useNavigate();

  function logout() {
    setIsLoggedIn(false);
    navigate("/login");
  }

  return (
    <div align="center">
      <h1> Dashboard</h1>
      <p>Welcome! You are logged in.</p>

      <button onClick={logout}>Logout</button>

      <br /><br />

      <Link to="/">Home</Link>
    </div>
  );
}

// Protected Route
function ProtectedRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Navigate to="/login" />;
}

// 404 Page
function NotFound() {
  return (
    <div align="center">
      <h1>404</h1>
      <h2>Page Not Found</h2>

      <Link to="/">Go Home</Link>
    </div>
  );
}

// Main App
function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard setIsLoggedIn={setIsLoggedIn} />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />

      </Routes>
  );
}
export default Page;