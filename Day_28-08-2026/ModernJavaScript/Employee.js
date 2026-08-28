const employees = [

    {
        id: 101,
        name: "Susmitha",
        role: "Developer",
        salary: 40000,
        skills: ["JavaScript", "React"]
    },

    {
        id: 102,
        name: "Manasu",
        role: "Designer",
        salary: 35000,
        skills: ["HTML", "CSS"]
    },

    {
        id: 103,
        name: "Teju",
        role: "Tester",
        salary: 30000,
        skills: ["Testing", "JavaScript"]
    }

];

// DESTRUCTURING

const { name, role, salary } = employees[0];

console.log(name);
console.log(role);
console.log(salary);

// TEMPLATE LITERALS

const welcomeMessage = `Welcome ${name}`;

console.log(welcomeMessage);

// SPREAD OPERATOR

// Copy employee and change role

const newEmployee = {
    ...employees[0],
    role: "Senior Developer"
};

console.log("New Employee:", newEmployee);


// Add new skill

const updatedSkills = [
    ...employees[0].skills,
    "Node.js"
];

console.log("Updated Skills:", updatedSkills);

// REST OPERATOR


function calculateSalary(...salaries) {

    return salaries.reduce(
        (total, salary) => total + salary,
        0
    );

}

console.log(
    "Total Salary:",
    calculateSalary(40000, 35000, 30000)
);


// OPTIONAL CHAINING

console.log(
    employees[0].manager?.name
);


// NULLISH COALESCING

const manager =
    employees[0].manager?.name ?? "No Manager";

console.log("Manager:", manager);

// MAP

const employeeMap = new Map();

employees.forEach(employee => {

    employeeMap.set(employee.id, employee);

});

console.log("Employee 101:");
console.log(employeeMap.get(101));

// SET

const skillSet = new Set();

employees.forEach(employee => {

    employee.skills.forEach(skill => {

        skillSet.add(skill);

    });

});

console.log("Unique Skills:");
console.log(skillSet);

// WEAKMAP

const privateData = new WeakMap();

privateData.set(
    employees[0],
    {
        password: "12345"
    }
);

console.log(
    "WeakMap:",
    privateData.get(employees[0])
);

// WEAKSET

const loggedInEmployees = new WeakSet();

loggedInEmployees.add(employees[0]);

console.log(
    "Logged In:",
    loggedInEmployees.has(employees[0])
);

// OUTPUT AREA

const output = document.getElementById("output");

// SHOW EMPLOYEES

function showEmployees() {

    output.innerHTML = `
        <h2>All Employees</h2>
    `;

    employees.forEach(employee => {

        const {
            id,
            name,
            role,
            salary,
            skills
        } = employee;

        output.innerHTML += `

            <div>

                <h3>${name}</h3>

                <p>ID: ${id}</p>

                <p>Role: ${role}</p>

                <p>Salary: ₹${salary}</p>

                <p>
                    Skills: ${skills.join(", ")}
                </p>

            </div>

            <hr>

        `;

    });

}

// SHOW SKILLS

function showSkills() {

    output.innerHTML = `
        <h2>Unique Skills</h2>
    `;

    skillSet.forEach(skill => {

        output.innerHTML += `
            <p>✔ ${skill}</p>
        `;

    });

}

// SHOW TOTAL SALARY

function showSalary() {

    const salaries = employees.map(
        employee => employee.salary
    );

    const total = calculateSalary(...salaries);

    output.innerHTML = `

        <h2>Total Salary</h2>

        <h3>₹${total}</h3>

    `;

}

// SHOW EMPLOYEE DETAILS

function showDetails() {

    const employee = employees[0];

    const {
        name,
        role,
        salary,
        skills
    } = employee;

    const manager =
        employee.manager?.name ?? "No Manager";

    output.innerHTML = `

        <h2>Employee Details</h2>

        <p>
            <b>Name:</b> ${name}
        </p>

        <p>
            <b>Role:</b> ${role}
        </p>

        <p>
            <b>Salary:</b> ₹${salary}
        </p>

        <p>
            <b>Skills:</b> ${skills.join(", ")}
        </p>

        <p>
            <b>Manager:</b> ${manager}
        </p>

    `;

}

// EVENT LISTENERS

document
    .getElementById("employeesBtn")
    .addEventListener("click", showEmployees);


document
    .getElementById("skillsBtn")
    .addEventListener("click", showSkills);


document
    .getElementById("salaryBtn")
    .addEventListener("click", showSalary);


document
    .getElementById("detailsBtn")
    .addEventListener("click", showDetails);