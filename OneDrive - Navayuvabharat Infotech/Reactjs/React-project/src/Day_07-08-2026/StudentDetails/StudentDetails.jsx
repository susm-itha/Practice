import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Student from "./Pages/Student";
import Layout from "./Pages/Layout";
import NotFound from "./Pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";

function Profile() {
    return <h2>Welcome Profile</h2>;
}

function App2() {
    return (
        <Routes>

            <Route path="/" element={<Layout />}>

                <Route index element={<Home />} />

                <Route path="about" element={<About />} />

                <Route path="student/:id" element={<Student />} />

                <Route path="login" element={<Login />} />

                <Route
                    path="dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                >
                    <Route path="profile" element={<Profile />} />
                </Route>

                <Route path="*" element={<NotFound />} />

            </Route>

        </Routes>
    );
}

export default App2;