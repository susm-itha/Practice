//shallow copy
let student1 = {
    name: "Susmitha",
    age: 22
}
let student2 = { ...student1 }
student2.age = 23
console.log(student1)
console.log(student2)

//using object assign
let product1 = {
    name: "Laptop",
    price: 50000
}
let product2 = Object.assign({}, product1)
product2.price = 55000
console.log(product1)
console.log(product2)