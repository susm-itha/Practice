import React from "react";

import { Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <h2>Courses</h2>
            <h2>Marks</h2>
            <h2>Assignments</h2>
            <Outlet />
        </div>
    );
}

export default Dashboard;