let students = ["Ravi", "Anu", "John", "Priya", "Anu"];

// Accessing Array
function showArray() {
    document.getElementById("output").innerHTML =
        "Students: " + students.join(", ");
}

// Adding Elements
function addStudent() {
    students.push("Rahul");       // Add at end
    students.unshift("Sneha");    // Add at beginning

    showArray();
}

// Removing Elements
function removeStudent() {
    students.pop();     // Remove from end
    students.shift();   // Remove from beginning

    showArray();
}

// Searching Elements
function searchStudent() {
    let name = "John";

    let position = students.indexOf(name);

    if (position !== -1) {
        document.getElementById("output").innerHTML =
            name + " found at index " + position;
    } else {
        document.getElementById("output").innerHTML =
            name + " not found";
    }
}

// Looping Through Array
function processArray() {

    // forEach()
    let list = "";
    students.forEach(function(student) {
        list += student + " ";
    });

    // map()
    let upperNames = students.map(function(student) {
        return student.toUpperCase();
    });

    // filter()
    let filtered = students.filter(function(student) {
        return student.length > 4;
    });

    // reduce()
    let totalLetters = students.reduce(function(total, student) {
        return total + student.length;
    }, 0);

    // find()
    let found = students.find(function(student) {
        return student.length > 4;
    });

    // findIndex()
    let foundIndex = students.findIndex(function(student) {
        return student.length > 4;
    });

    // some()
    let hasJohn = students.some(function(student) {
        return student === "John";
    });

    // every()
    let allNames = students.every(function(student) {
        return student.length > 2;
    });

    // sort()
    let sorted = [...students].sort();

    // join()
    let joined = students.join(" - ");

    // Flattening Arrays
    let nested = [["Ravi", "Anu"], ["John", "Priya"]];
    let flat = nested.flat();

    // Removing Duplicate Values
    let unique = [...new Set(students)];

    document.getElementById("output").innerHTML = `
        <b>Original:</b> ${list}<br><br>

        <b>map():</b> ${upperNames.join(", ")}<br>

        <b>filter():</b> ${filtered.join(", ")}<br>

        <b>reduce():</b> ${totalLetters} total letters<br>

        <b>find():</b> ${found}<br>

        <b>findIndex():</b> ${foundIndex}<br>

        <b>some():</b> ${hasJohn}<br>

        <b>every():</b> ${allNames}<br>

        <b>sort():</b> ${sorted.join(", ")}<br>

        <b>join():</b> ${joined}<br>

        <b>flat():</b> ${flat.join(", ")}<br>

        <b>Unique Values:</b> ${unique.join(", ")}
    `;
}