//Anonymous Function as Argument
function calculate(a, b, operation) {
    console.log(operation(a, b))
}
calculate(10, 5, function(x, y) {
    return x + y
})

//Arrow Function as Argument
function performTask(task) {
    task()
}
performTask(() => {
    console.log("Task Completed")
})

//Function Returning Another Function
function outerFunction() {
    return function() {
        console.log("Inner Function Executed")
    }
}
const result = outerFunction()
result()

//callback function
function fetchData(callback) {
    console.log("Fetching Data...")
    callback()
}
function displayData() {
    console.log("Data Displayed")
}
fetchData(displayData)