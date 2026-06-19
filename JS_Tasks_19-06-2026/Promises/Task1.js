//Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Data loaded successfully!");
    } else {
        reject("Failed to load data!");
    }
})

//Consuming a Promise
myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })

//Using setTimeout()
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("User data received");
    }, 3000);
});

fetchData
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
