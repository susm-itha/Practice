//display for loop
let students = {
    name: "Susmitha",
    age: 21,
    course: "JavaScript"
}
for (let key in students) {
    console.log(key)
}
//display properties
let student = {
    name: "Susmitha",
    age: 21,
    course: "JavaScript"
}

for (let key in student) {
    console.log(student[key]);
}
//display keys and value
let employee = {
    id: 1010,
    name: "susmitha",
    department: "IT"
}
for (let key in employee) {
    console.log(key + " : " + employee[key])
}

