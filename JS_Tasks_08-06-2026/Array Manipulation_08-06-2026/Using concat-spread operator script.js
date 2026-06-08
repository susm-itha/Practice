let arr1 = [1, 2];
let arr2 = [3, 4];

// Using concat()
let result1 = arr1.concat(arr2);

console.log("Using concat():");
console.log(result1);

// Using spread operator
let result2 = [...arr1, ...arr2];

console.log("Using spread operator:");
console.log(result2);