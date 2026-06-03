//recursive functions
function factorial(n) {
    if (n == 0 , n == 1) {
        return 1
    }
    return n * factorial(n - 1)
}
console.log(factorial(5));

//fibonacci series
function fibonacci(n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log("series")
for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i))
}