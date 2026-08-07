import React from "react";
import { useParams } from "react-router-dom";

function Student() {

    const { id } = useParams();

    const students = {
        101: "Susmitha",
        102: "Manasu",
        103: "Teju"
    };

    return (
        <div>
            <h2>Student Details</h2>

            <h3>ID : {id}</h3>

            <h3>Name : {students[id]}</h3>

        </div>
    );
}

export default Student;