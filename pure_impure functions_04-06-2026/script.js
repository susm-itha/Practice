//Pure Function
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
console.log(add(10, 20));

//Pure Function with Multiplication
function multiply(x, y) {
    return x * y;
}

console.log(multiply(5, 4));

//Pure Function for Greeting
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Susmitha"));

//impure function
let count = 0;

function increment() {
    count++;
    return count;
}

console.log(increment());
console.log(increment());

//impure function array
let fruits = ["Apple", "Banana"];

function addFruit(fruit) {
    fruits.push(fruit);
}

addFruit("Mango");

console.log(fruits);

//Practical Scenario of Pure Function
function calculateDiscount(price, discount) {
    return price - discount;
}

console.log(calculateDiscount(1000, 200));

//Practical Scenario of Impure Function
let balance = 5000;

function deposit(amount) {
    balance += amount;
    return balance;
}

console.log(deposit(1000));
console.log(deposit(500));

