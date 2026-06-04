//factorial recursion
function factorial(n) {
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1)
}
console.log(factorial(5))

//fibonacci series using recursion
function fibonacci(n) {
    if (n === 0) {
        return 0
    }

    if (n === 1) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(6))

//string using recursion
function reverseString(str) {
    if (str === "") {
        return ""
    }
    return reverseString(str.slice(1)) + str[0]
}

console.log(reverseString("susmitha"))

//factorial using iteration

function factorialIterative(n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result = result * i
    }
    return result
}
console.log(factorialIterative(5))

//fibonacci using iteration
function fibonacciIterative(n) {
    let first = 0
    let second = 1
    let next

    for (let i = 2; i <= n; i++) {

        next = first + second
        first = second
        second = next
    }

    return n === 0 ? 0 : second
}

console.log(fibonacciIterative(6))