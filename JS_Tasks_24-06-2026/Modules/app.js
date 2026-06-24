// Importing default export
import greet from './math.js';

// Importing named exports
import {
    companyName,
    add,
    subtract,
    multiply
} from './math.js';

console.log(companyName);

console.log(greet("Susmitha"));

console.log("Addition:", add(10, 5));

console.log("Subtraction:", subtract(10, 5));

console.log("Multiplication:", multiply(10, 5));