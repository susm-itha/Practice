console.log("Start");

// Call Stack
function hello() {
    console.log("Inside Function");
}

hello();

// Web API + Macrotask Queue

setTimeout(() => {
    console.log("setTimeout");
}, 0);

// Web API + Microtask Queue

Promise.resolve().then(() => {
    console.log("Promise");
});

// Normal synchronous code

console.log("End");

// Another setTimeout
setTimeout(() => {
    console.log("Second setTimeout");
}, 0);

console.log("Finished");