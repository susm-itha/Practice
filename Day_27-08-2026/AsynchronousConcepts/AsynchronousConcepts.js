console.log("Program Started");

// Promise - returns employee data
function getEmployees() {

    return new Promise((resolve, reject) => {

        console.log("Promise Started");

        setTimeout(() => {

            const employees = [
                {
                    id: 101,
                    name: "Susmitha",
                    role: "Frontend Developer",
                    salary: 40000
                },
                {
                    id: 102,
                    name: "Manasu",
                    role: "Backend Developer",
                    salary: 45000
                },
                {
                    id: 103,
                    name: "Teju",
                    role: "UI Designer",
                    salary: 35000
                }
            ];

            resolve(employees);

        }, 2000);
    });
}


// Async/Await
async function loadEmployees() {

    console.log("loadEmployees Started");

    document.getElementById("output").innerHTML =
        "<h3>Loading employees...</h3>";

    try {

        // Wait for Promise
        const employees = await getEmployees();

        console.log("Employee data received");

        let result = "<h2>Employee List</h2>";

        employees.forEach(employee => {

            result += `
                <div>
                    <h3>${employee.name}</h3>
                    <p>ID: ${employee.id}</p>
                    <p>Role: ${employee.role}</p>
                    <p>Salary: ₹${employee.salary}</p>
                    <hr>
                </div>
            `;
        });

        document.getElementById("output").innerHTML = result;

        console.log("Employee details displayed");

    } catch (error) {

        document.getElementById("output").innerHTML =
            "<p>Failed to load employees</p>";

        console.log(error);
    }
}


console.log("Program Ended");