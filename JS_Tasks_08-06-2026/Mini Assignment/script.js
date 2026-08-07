// Creating arrays with different data types

let numbers = [10, 20, 30];

let fruits = ["Apple", "Banana", "Mango"];

let mixedArray = [100, "Hello", true];

console.log("Number Array:");
console.log(numbers);

console.log("Fruit Array:");
console.log(fruits);

console.log("Mixed Array:");
console.log(mixedArray);


// Array containing other arrays
let students = [
    ["Ram", 85],
    ["Sita", 90],
    ["John", 78]
];

console.log("\nMultidimensional Array:");
console.log(students);

// Accessing multidimensional array elements

console.log("\nAccessing Elements:");
console.log(students[0][0]); // Ram
console.log(students[1][1]); // 90


// push() -> Adds elements at the end

numbers.push(40);

console.log("\nAfter push():");
console.log(numbers);


// unshift() -> Adds elements at the beginning

numbers.unshift(5);

console.log("\nAfter unshift():");
console.log(numbers);


// splice() -> Adds elements at any position

numbers.splice(2, 0, 15);

console.log("\nAfter splice() for adding:");
console.log(numbers);

//Removing elements

// pop() -> Removes last element

numbers.pop();

console.log("\nAfter pop():");
console.log(numbers);


// shift() -> Removes first element

numbers.shift();

console.log("\nAfter shift():");
console.log(numbers);


// splice() -> Removes elements from any position

numbers.splice(1, 1);

console.log("\nAfter splice() for removing:");
console.log(numbers);

//searching elements
let colors = ["Red", "Blue", "Green", "Blue"];


// includes() -> Checks element existence

console.log("\nUsing includes():");
console.log(colors.includes("Blue"));


// indexOf() -> Finds first occurrence

console.log("\nUsing indexOf():");
console.log(colors.indexOf("Blue"));


// lastIndexOf() -> Finds last occurrence

console.log("\nUsing lastIndexOf():");
console.log(colors.lastIndexOf("Blue"));


// find() -> Finds element using condition

let result = numbers.find(num => num > 15);

console.log("\nUsing find():");
console.log(result);


// findIndex() -> Finds index using condition

let resultIndex = numbers.findIndex(num => num > 15);

console.log("\nUsing findIndex():");
console.log(resultIndex);

//combining array
let arr1 = [1, 2];
let arr2 = [3, 4];


// Using concat()

let combined1 = arr1.concat(arr2);

console.log("\nUsing concat():");
console.log(combined1);


// Using spread operator (...)

let combined2 = [...arr1, ...arr2];

console.log("\nUsing spread operator:");
console.log(combined2);

//array literals

let languages = ["JavaScript", "Python", "Java"];

//using loop

console.log("\nUsing for loop:");

for (let i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}


console.log("\nUsing for...of loop:");

for (let language of languages) {
    console.log(language);
}


console.log("\nUsing forEach():");

languages.forEach(function(language, index) {
    console.log(index + ": " + language);
});


//emptying array

let data = [1, 2, 3, 4];

console.log("\nOriginal Array:");
console.log(data);


// Clearing array using length = 0

data.length = 0;

console.log("\nAfter Emptying Array:");
console.log(data);