//Removing Duplicate Strings
const fruits = ["Apple", "Mango", "Apple", "Orange", "Mango"];

const uniqueFruits = [...new Set(fruits)];

console.log(uniqueFruits);

//Removing Duplicate Objects
const students = [
    { id: 1, name: "susmitha" },
    { id: 2, name: "manasu" },
    { id: 1, name: "teju" }
];

const uniqueStudents = [
    ...new Map(
        students.map(student => [student.id, student])
    ).values()
];
console.log(uniqueStudents)
