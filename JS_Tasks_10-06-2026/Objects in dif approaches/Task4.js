//Object Literal
let students = {
    name: "Susmitha",
    age: 20,
    grade: "A"
};
console.log(students)

//Using the new Object
let Fruits = new Object()
Fruits.name = "apples"
Fruits.date = "10/06/2026"
Fruits.rating = "4/5"

console.log(Fruits)

//Using Factory Function
function createStudent(bike, model, rating) {
    return {
        bike: bike,
        model: model,
        rating: rating
    };
}
let details = createStudent("jawa",26 , "4")
console.log(details)