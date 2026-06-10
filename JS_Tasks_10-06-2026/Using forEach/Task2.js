//dispaly array elements
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(function(fruit) {
    console.log(fruit);
});

//display Elements with Index
let colors = ["Red", "Green", "Blue"];
colors.forEach(function(color, index) {
    console.log(index + ": " + color);
});

//Sum of Array Elements
let numbers = [10, 20, 30, 40];
let sum = 0;
numbers.forEach(function(num) {
    sum += num;
});
console.log("Sum =", sum);

//Convert Names
let names = ["susmitha", "manasu", "Teju"];
names.forEach(function(name) {
    console.log(name.toUpperCase());
});
