const students = [
    {
        id: 101,
        name: "Manasu",
        marks: 85
    },

    {
        id: 102,
        name: "Teju",
        marks: 72
    },

    {
        id: 103,
        name: "susmitha",
        marks: 35
    },

    {
        id: 104,
        name: "aashi",
        marks: 95
    }
];


// Function Declaration

function getGrade(marks) {

    if (marks >= 90) {
        return "A+";
    }

    else if (marks >= 75) {
        return "A";
    }

    else if (marks >= 60) {
        return "B";
    }

    else if (marks >= 40) {
        return "C";
    }

    else {
        return "F";
    }
}


// Arrow Function

const getStatus = (marks) => {

    return marks >= 40 ? "Pass" : "Fail";

};


// Function Expression

const displayStudents = function () {

    const table = document.getElementById("studentTable");

    let passed = 0;
    let failed = 0;


    // for...of Loop

    for (let student of students) {

        const status = getStatus(student.marks);


        // Conditional Statement

        if (status === "Pass") {
            passed++;
        }

        else {
            failed++;
        }


        // Add student to table

        table.innerHTML += `

            <tr>

                <td>${student.id}</td>

                <td>${student.name}</td>

                <td>${student.marks}</td>

                <td>
                    <span class="badge">
                        ${getGrade(student.marks)}
                    </span>
                </td>

                <td class="${status === "Pass" ? "pass" : "fail"}">
                    ${status}
                </td>

            </tr>

        `;
    }


    // Update Dashboard

    document.getElementById("total").innerText =
        students.length;

    document.getElementById("passed").innerText =
        passed;

    document.getElementById("failed").innerText =
        failed;
};


// Add Student Button

function addStudent() {

    alert("Add Student feature is coming soon!");

}


// Event Listener

document
    .getElementById("addStudentBtn")
    .addEventListener("click", addStudent);


// Display Students

displayStudents();