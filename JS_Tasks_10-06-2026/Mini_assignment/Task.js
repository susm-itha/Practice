let students = [
    { id: 101, name: "Susmitha", marks: 85 },
    { id: 102, name: "Teju", marks: 92 },
    { id: 103, name: "Manasu", marks: 78 }
]
console.log(students)

// Array Operations
// Add Student
students.push({ id: 104, name: "Manasu", marks: 88 })
// Remove Last Student
students.pop()

// Searching Techniques
// Find Student
let student = students.find(s => s.id === 102)
console.log(student)

// Find Index
let index = students.findIndex(s => s.name === "Kiran")
console.log(index)

// Transformation Methods
// Map
let names = students.map(s => s.name)
console.log(names)

// Filter
let toppers = students.filter(s => s.marks > 80)
console.log(toppers)

// Reduce
let totalMarks = students.reduce((sum, s) => sum + s.marks, 0)
console.log(totalMarks)

// Iteration Method
students.forEach(student => {
    console.log(student.name + " scored " + student.marks)
})

// Sorting Using sort()
students.sort((a, b) => a.marks - b.marks)
console.log(students)

// Sorting Without sort
// Bubble Sort
let sortedStudents = [students]

for (let i = 0; i < sortedStudents.length - 1; i++) {
    for (let j = 0; j < sortedStudents.length - 1 - i; j++) {
        if (sortedStudents[j].marks > sortedStudents[j + 1].marks) {
            let temp = sortedStudents[j]
            sortedStudents[j] = sortedStudents[j + 1]
            sortedStudents[j + 1] = temp
        }
    }
}
console.log(sortedStudents)

// Object Manipulation
let college = {
    name: "College",
    city: "Hyderabad",
    display() {
        console.log(this.name + " - " + this.city)
    }
}
// Access Property
console.log(college.name)
// Update Property
college.city = "Vijayawada"
// Add Property
college.year = 2020
// Delete Property
delete college.year
// Method Call
college.display()