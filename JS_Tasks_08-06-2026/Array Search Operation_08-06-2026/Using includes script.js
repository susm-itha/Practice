//Using includes() with Number Arrays
let numbers = [10, 20, 30, 40];
console.log(numbers.includes(20));
console.log(numbers.includes(50));

//Using includes() with String Arrays
let students = ["susmitha", "manasu", "teju"];
console.log(students.includes("Sus"));
console.log(students.includes("manasu"));

//Using includes() with Mixed Data Types
let mixedArray = [100, "Hello", true];
console.log(mixedArray.includes("Hello"));
console.log(mixedArray.includes(true));
console.log(mixedArray.includes(200));
