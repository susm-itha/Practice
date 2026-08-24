let employees = [
    {
        name: "Susmitha",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Manasu",
        role: "Tester",
        salary: 35000
    },
    {
        name: "Teju",
        role: "Designer",
        salary: 30000
    },
    {
        name: "Datta",
        role: "ASE",
        salary: 45000
    },
];

// FIRST-CLASS FUNCTION

// Function stored inside a variable
const welcomeMessage = function(name) {
    return "Welcome " + name;
};

// PURE FUNCTION

// Same input always gives same output
function addBonus(salary) {
    return salary + 5000;
}

// IMPURE FUNCTION

// Changes the HTML outside the function
function updateCount(count) {
    document.getElementById("count").innerHTML =
        "Total Employees: " + count;
}

// CALLBACK FUNCTION

function processEmployees(callback) {

    employees.forEach(function(employee) {

        callback(employee);

    });
}

// HIGHER-ORDER FUNCTION

// processEmployees takes another function as argument
processEmployees(function(employee) {
    console.log(employee.name);
});

// CLOSURE

function employeeCounter() {

    let count = 0;

    return function() {

        count++;

        return count;
    };
}

const counter = employeeCounter();

//FUNCTION COMPOSITION

function getSalary(salary) {

    return addBonus(salary);
}

function formatSalary(salary) {

    return "Salary: ₹" + salary;
}

function employeeSalary(salary) {

    return formatSalary(getSalary(salary));
}

// DISPLAY EMPLOYEES

function showEmployees() {

    let output = "";

    processEmployees(function(employee) {

        output += `
            <p>
                <b>Name:</b> ${employee.name}<br>
                <b>Role:</b> ${employee.role}<br>
                <b>${employeeSalary(employee.salary)}</b>
            </p>
            <hr>
        `;

    });

    document.getElementById("employeeList").innerHTML = output;


    // Closure
    let total = employees.length;

    for (let i = 0; i < total; i++) {
        counter();
    }

    updateCount(counter());
}

// IIFE

(function() {

    console.log("Employee Dashboard");

})();