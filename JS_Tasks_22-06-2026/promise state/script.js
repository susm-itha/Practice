console.log("Start");

let promise = new Promise((resolve, reject) => {
    console.log("Promise Created");

    setTimeout(() => {
        resolve("Promise Resolved");
    }, 2000);
});

promise.then((result) => {
    console.log(result);
});

console.log("End");