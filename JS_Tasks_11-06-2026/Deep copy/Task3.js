//Deep Copy
let student1 = {
    name: "Susmitha",
    age: 22,
    address: {
        city: "Hyderabad"
    }
}
let student2 = JSON.parse(JSON.stringify(student1))
student2.address.city = "Bangalore"
console.log(student1)
console.log(student2)

//Deep Copy Using structured
let employee1 = {
    name: "John",
    address: {
        city: "Chennai"
    }
}
let employee2 = structuredClone(employee1)
employee2.address.city = "Mumbai"
console.log(employee1)
console.log(employee2)