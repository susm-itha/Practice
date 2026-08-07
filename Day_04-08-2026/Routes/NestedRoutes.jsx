import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

// Parent Component
function Dashboard() {
  return (
    <div>
      <h1>Bike Showroom Dashboard</h1>

      <Link to="">Home</Link> |
      <Link to="profile"> Profile</Link> |
      <Link to="settings"> Settings</Link>

      <hr />

      {/* Child pages display here */}
      <Outlet />
    </div>
  );
}

// Child Components
function Home() {
  return <h2>Welcome to Bike Home Page</h2>;
}

function Profile() {
  return <h2>Bike Owner Profile</h2>;
}

function Settings() {
  return <h2>Bike Settings Page</h2>;
}
function Nested() {
  return (
      <Routes>

        <Route path="/" element={<Dashboard />}>

          <Route index element={<Home />} />

          <Route path="profile" element={<Profile />} />

          <Route path="settings" element={<Settings />} />

        </Route>

      </Routes>
  );
}
export default Nested;