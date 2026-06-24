// Exporting variables
export const companyName = "nyb";
export const version = "1.0";

// Exporting functions
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// Exporting using export keyword separately
const PI = 3.14159;

function multiply(a, b) {
    return a * b;
}

export { PI, multiply };