const student = {
    id: 101,
    name: "Susmitha",
    age: 23,
    course: "JavaScript",
    marks: [85, 78, 92, 88]
};

// Ternary Operator
let result = student.marks[0] >= 40 ? "Pass" : "Fail";

console.log("Student ID:", student.id);
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);
console.log("Result:", result);


// for loop
console.log("\n forloop");

for (let i = 0; i < student.marks.length; i++) {
    console.log(student.marks[i]);
}


// while loop
console.log("\n whileloop");

let i = 0;

while (i < student.marks.length) {
    console.log(student.marks[i]);
    i++;
}


// do while loop
console.log("\n dowhileloop");

let j = 0;

do {
    console.log(student.marks[j]);
    j++;
} while (j < student.marks.length);


// for in loop
console.log("\n inloop");

for (let key in student) {
    console.log(key, ":", student[key]);
}


// for of loop
console.log("\n ofloop");

for (let mark of student.marks) {
    console.log(mark);
}