//global scope
let company = "nyb"
function Company() {
    console.log(company)
}
console.log(company)
Company()  

//function scope
function Details() {
    let Name = "Susmitha"
    console.log(Name);
}
Details();

//block function
{
let marks = 95
const grade = "A"
console.log(marks)
console.log(grade)
}

//gobal scope accessibility
let course = "JavaScript";
function student1() {
    console.log("Student 1:", course)
}
function student2() {
    console.log("Student 2:", course)
}
console.log("Main Program:", course)
student1();
student2();

//function scope accessibility
function employeeDetails() {
let employeeName = "Susmitha"
console.log("Inside Function:", employeeName)
}
employeeDetails()

//block scope accessibility
if (true) {
let city = "Hyderabad"
const state = "Telangana"
console.log(city)
console.log(state)
}

//nested scope accessibility
let companys = "OpenAI"
function department() {
let manager = "susmitha"
function team() {
let employee = "manasu"
console.log(companys)
console.log(manager)
console.log(employee)
}
team()
}
department()




