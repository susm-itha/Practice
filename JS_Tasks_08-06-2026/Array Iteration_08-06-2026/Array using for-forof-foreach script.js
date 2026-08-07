let arr = [1, 2, 3];

console.log("for loop:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("for...of loop:");
for (let value of arr) {
    console.log(value);
}

console.log("forEach():");
arr.forEach(function(value) {
    console.log(value);
});