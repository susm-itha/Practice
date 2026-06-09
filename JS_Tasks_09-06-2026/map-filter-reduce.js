//map
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(function(num) {
    return num * num;
});
console.log("Original Array:", numbers);
console.log("Squared Array:", squares);

//filter
let numberss = [10, 15, 20, 25, 30];
let evenNumbers = numberss.filter(function(num) {
    return num % 2 === 0;
});
console.log("Original Array:", numbers);
console.log("Even Numbers:", evenNumbers);

//reduce
let numberr = [1, 2, 3, 4, 5];
let sum = numberr.reduce(function(total, num) {
    return total + num;
}, 0);
console.log("Array Elements:", numbers);
console.log("Sum:", sum);
