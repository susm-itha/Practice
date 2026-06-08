//using length=0
let fruits = ["Apple", "Banana", "Mango"]
fruits.length = 0
console.log(fruits)

//using splice()
let numbers = [10, 20, 30, 40]
numbers.splice(0, numbers.length)
console.log(numbers)

//using pop()
let data = [1, 2, 3, 4]
while (data.length > 0) {
    data.pop()
}
console.log(data)

//using shift()
let students = ["susmitha", "teju", "manasu"]
while (students.length > 0) {
    students.shift()
}
console.log(students)

//using array[]
let arr1 = [1, 2, 3]
let arr2 = arr1
arr1 = []
console.log(arr1)
console.log(arr2)