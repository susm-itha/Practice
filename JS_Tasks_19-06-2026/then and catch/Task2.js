//Promise Resolved Successfully
const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Data fetched successfully!");
    } else {
        reject("Failed to fetch data.");
    }
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

//Promise Rejected
const myPromises = new Promise((resolve, reject) => {
    let success = false;

    if (success) {
        resolve("Data fetched successfully!");
    } else {
        reject("Failed to fetch data.");
    }
});

myPromises
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data received after 2 seconds");
    }, 2000);
});

promise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });