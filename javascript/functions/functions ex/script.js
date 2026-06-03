//function declaration
function massage(){
    console.log("Hello")
}
massage()

//function declaration with parameter
function add(a, b){
    return a + b
}
console.log(add(10, 20))

//declaration with condition
function EvenOdd(num){
     if (num % 2 === 0){
        return "Even Number"
    } else{
        return "Odd Number"
    }
}
console.log(EvenOdd(6));

//function expression 
let sayHi = function (){
    console.log("Hi susmitha")
}
sayHi()

//function with parameter
let multiple = function (a,b){
    return a * b
}
console.log(multiple(10, 20))

//with condition
let Odd = function(num){
     if (num % 2 === 0){
        return "Even Number"
    } else{
        return "Odd Number"
    }
}
console.log(Odd(3));

//named function
function massages(name) {
    return {name}
}
console.log(massages("Susmitha"))

//anonymous
let subtract = function(a, b) {
    return a - b
}
console.log(subtract(60,20 ))

//arrow 
let addition = (a, b) => {
    return a + b
}
console.log(addition(5, 4))
