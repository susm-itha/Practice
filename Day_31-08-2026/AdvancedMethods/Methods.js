const employees = [
    { id: 101, name: "Susmitha", role: "Developer", salary: 40000 },
    { id: 102, name: "Manasu", role: "Tester", salary: 35000 },
    { id: 103, name: "Teju", role: "Developer", salary: 45000 },
    { id: 104, name: "Datta", role: "Designer", salary: 30000 },
    { id: 105, name: "Rahul", role: "Tester", salary: 35000 }
];

const output = document.getElementById("output");

// Accessing Array Elements
function showEmployees() {
    output.innerHTML = `
        <h2>All Employees</h2>
        <p>First Employee: ${employees[0].name}</p>
        <p>Second Employee: ${employees[1].name}</p>
    `;
}

// map()
function showNames() {
    const names = employees.map(employee => employee.name);

    output.innerHTML = `
        <h2>Employee Names</h2>
        <p>${names.join(", ")}</p>
    `;
}

// filter()
function showDevelopers() {
    const developers = employees.filter(
        employee => employee.role === "Developer"
    );

    output.innerHTML = "<h2>Developers</h2>";

    developers.forEach(employee => {
        output.innerHTML += `
            <p>${employee.name} - ${employee.role}</p>
        `;
    });
}

// reduce()
function showSalary() {
    const totalSalary = employees.reduce(
        (total, employee) => total + employee.salary,
        0
    );

    output.innerHTML = `
        <h2>Total Salary</h2>
        <p>₹${totalSalary}</p>
    `;
}

// find()
function findEmployee() {
    const employee = employees.find(
        employee => employee.id === 103
    );

    output.innerHTML = `
        <h2>Find Employee</h2>
        <p>${employee.name} - ${employee.role}</p>
    `;
}

// findIndex()
function findEmployeeIndex() {
    const index = employees.findIndex(
        employee => employee.id === 103
    );

    output.innerHTML = `
        <h2>Employee Index</h2>
        <p>Employee ID 103 is at index: ${index}</p>
    `;
}

// some()
function checkSalary() {
    const result = employees.some(
        employee => employee.salary > 50000
    );

    output.innerHTML = `
        <h2>Some()</h2>
        <p>Is any employee salary above ₹50,000? ${result}</p>
    `;
}

// every()
function checkAll() {
    const result = employees.every(
        employee => employee.salary >= 30000
    );

    output.innerHTML = `
        <h2>Every()</h2>
        <p>Do all employees earn at least ₹30,000? ${result}</p>
    `;
}

// sort()
function sortEmployees() {
    const sortedEmployees = [...employees].sort(
        (a, b) => b.salary - a.salary
    );

    output.innerHTML = "<h2>Employees Sorted by Salary</h2>";

    sortedEmployees.forEach(employee => {
        output.innerHTML += `
            <p>${employee.name} - ₹${employee.salary}</p>
        `;
    });
}

// Removing Duplicate Elements
function removeDuplicates() {
    const names = employees.map(employee => employee.name);

    const uniqueNames = [...new Set(names)];

    output.innerHTML = `
        <h2>Unique Employee Names</h2>
        <p>${uniqueNames.join(", ")}</p>
    `;
}