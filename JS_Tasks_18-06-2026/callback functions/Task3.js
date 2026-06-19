//Synchronous Callback
//Executes immediately during program execution.
let numbers = [1, 2, 3]
numbers.forEach(function(num) {
    console.log(num)
});

//Asynchronous Callback
//Executes later after an event or delay
setTimeout(function() {
    console.log("Executed later")
}, 1000)

//Calculator Using Callback
function calculate(a, b, operation) {
    return operation(a, b)
}
function add(x, y) {
    return x + y
}
function multiply(x, y) {
    return x * y
}
console.log("Addition:", calculate(10, 5, add))
console.log("Multiplication:", calculate(10, 5, multiply))