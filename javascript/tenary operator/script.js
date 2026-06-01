//if-else Statement
let age = 20;
let status;

if (age >= 18) {
    status = "Adult";
} else {
    status = "Minor";
}
console.log(status);

//examples tenary operators
let isOnline = false;
let statuss = isOnline ? "Online" : "Offline";
console.log(statuss);

let num = 15;
let evenOdd = num % 2 === 0 ? "Even" : "Odd";
console.log(evenOdd);

let marks = 40;
let result = marks >= 35 ? "Pass" : "Fail";
console.log(result);

let number = -5;
let sign = number >= 0 ? "Positive" : "Negative";
console.log(sign);

let a = 10;
let b = 25;
let greater = a > b ? a : b;
console.log(greater);