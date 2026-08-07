//normal copy
let student1 = {
    Name : "susmitha",
    age : 23 
}
   let student2 = student1
student2.age = 23
console.log(student1)
console.log(student2)

//modifying a property
let employee1 = {
    id: 101,
    department: "IT"
}
let employee2 = employee1
employee2.department = "HR"
console.log(employee1.department)
console.log(employee2.department)

//deleting a property
let product1 = {
    name: "Laptop",
    price: 50000
}
let product2 = product1
delete product2.price
console.log(product1)
console.log(product2)