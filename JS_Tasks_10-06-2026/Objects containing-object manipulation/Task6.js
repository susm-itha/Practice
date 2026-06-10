//Object with Methods
let student = {
    name: "Susmitha",
    age: 20,
    Info: function() {
        console.log("Name: " + this.name)
        console.log("Age: " + this.age)
    }
}
student.Info()

//Update Object Properties
let car = {
    brand: "Toyota",
    model: "25"
}
console.log(car)
car.model = "25"
console.log(car)

//Add New Properties
let cars = {
    brand: "Benz"
}
car.color = "Black"
console.log(cars)

//Delete Properties
let carr = {
    brand: "Toyota",
    model: "25.5",
    color: "Black"
};
delete car.color;
console.log(carr);