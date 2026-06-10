let employee = {
    id: 190050056,
    name: "Susmitha",
    salary: 50000
};

// Access
console.log(employee.name);

// Update
employee.salary = 60000;

// Add
employee.department = "IT";

// Delete
delete employee.id;
console.log(employee);