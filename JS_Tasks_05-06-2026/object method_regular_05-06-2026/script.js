//object method 
const student = {
    name: "Susmitha",
    age: 21,

    introduce: function () {
        console.log("My name is " + this.name)
    }
};
student.introduce()

//Regular Function
function greet(name) {
    console.log("Hello " + name);
}

greet("Susmitha")

//difference Between Object Method and Regular Function
const person = {
    name: "susmitha",

    methodExample: function () {
        console.log("Object Method:", this.name)
    }
}
function regularExample() {
    console.log("Regular Function:", this)
}
person.methodExample()
regularExample()