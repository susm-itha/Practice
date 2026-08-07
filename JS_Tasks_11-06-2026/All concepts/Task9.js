let student = {
    name: "Susmitha",
    age: 21,
    course: "JavaScript",
    marks: [85, 90, 78, 88, 95]
};

console.log(" STUDENT INFORMATION");

// String Methods + Template Strings
console.log(`Name: ${student.name}`);
console.log(`Uppercase Name: ${student.name.toUpperCase()}`);
console.log(`Name Length: ${student.name.length}`);

console.log("\n OBJECT PROPERTIES ");

// for...in Loop
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

console.log("\n MARKS ");

// Array + for...of Loop
let total = 0;

for (let mark of student.marks) {
    console.log(mark);
    total += mark;
}

// Math Object
let average = total / student.marks.length;

console.log(`Total Marks: ${total}`);
console.log(`Average Marks: ${Math.round(average)}`);

// Conditional Statements
let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 75) {
    grade = "B";
} else {
    grade = "C";
}

console.log(`Grade: ${grade}`);

console.log("\n ARRAY OPERATIONS ");

// Array Methods
let subjects = ["HTML", "CSS", "JavaScript"];

subjects.push("React");

console.log("Subjects:", subjects);
console.log("Includes React:", subjects.includes("React"));
console.log("Index of CSS:", subjects.indexOf("CSS"));
console.log("Joined Subjects:", subjects.join(", "));

console.log("\n forEach() EXAMPLE ");

subjects.forEach(function(subject, index) {
    console.log(`${index + 1}. ${subject}`);
});

console.log("\n DATE OBJECT ");

// Date Object
let today = new Date();

console.log("Current Date:", today.toDateString());
console.log("Current Time:", today.toLocaleTimeString());

console.log("\n MATH OBJECT");

// Math Methods
console.log("Round(45.78):", Math.round(45.78));
console.log("Floor(45.78):", Math.floor(45.78));
console.log("Ceil(45.78):", Math.ceil(45.78));
console.log("Random Number:", Math.floor(Math.random() * 100) + 1);

           