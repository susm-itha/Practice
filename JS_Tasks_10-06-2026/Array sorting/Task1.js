//Ascending Order Sorting
let numberss = [5, 2, 8, 1, 9];
for (let i = 0; i < numberss.length - 1; i++) {
    for (let j = 0; j < numberss.length - 1 - i; j++) {
        if (numberss[j] > numberss[j + 1]) {
        }
    }
}
console.log(numberss);

//Descending Order Sorting
let numbers = [5, 2, 8, 1, 9];

for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] < numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

console.log(numbers);

//using a functiom
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let result = bubbleSort([10, 4, 7, 2, 8]);
console.log(result);