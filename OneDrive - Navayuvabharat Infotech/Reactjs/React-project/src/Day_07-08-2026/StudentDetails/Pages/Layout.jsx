import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>

            <h2>React Router</h2>

            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/dashboard">Dashboard</Link>

            <hr />

            <Outlet />

        </div>
    );
}

export default Layout;