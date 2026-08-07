import { Student } from "./student.js";
import { saveStudents, getStudents } from "./storage.js";

let students = getStudents();

// Session Storage
sessionStorage.setItem("session", "Student App Started");

window.addStudent = function () {

    try {
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;

        if (!name || !age) {
            throw new Error("Please enter all details");
        }

        const student = new Student(name, age);

        students.push(student);

        saveStudents(students);

        console.log("Student Added:", student);

        // Destructuring
        const { name: studentName, age: studentAge } = student;

        console.log("Destructuring Output:");
        console.log(studentName, studentAge);

        // Iterator
        const iterator = students[Symbol.iterator]();

        console.log("Iterator Output:");
        console.log(iterator.next());
        console.log(iterator.next());

        // Generator
        function* studentGenerator() {
            for (let s of students) {
                yield s.name;
            }
        }

        const gen = studentGenerator();

        console.log("Generator Output:");
        console.log(gen.next());
        console.log(gen.next());

        // Promise Methods
        const p1 = Promise.resolve("Database Saved");
        const p2 = Promise.resolve("Notification Sent");
        const p3 = Promise.resolve("Email Sent");

        Promise.all([p1, p2, p3])
            .then(result => {
                console.log("Promise.all:", result);
            });

        Promise.race([p1, p2, p3])
            .then(result => {
                console.log("Promise.race:", result);
            });

        Promise.allSettled([p1, p2, p3])
            .then(result => {
                console.log("Promise.allSettled:", result);
            });

        Promise.any([p1, p2, p3])
            .then(result => {
                console.log("Promise.any:", result);
            });

    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Async Await + API
window.loadAPI = async function () {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        const data = await response.json();

        const { name, email } = data;

        console.log("API Data:");
        console.log("Name:", name);
        console.log("Email:", email);

    } catch (error) {
        console.log("API Error:", error.message);
    }
}