function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 2000);
}

fetchData((result) => {
    console.log(result);
});

//Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

fetchData()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

//