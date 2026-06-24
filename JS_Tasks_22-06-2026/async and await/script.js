async function greet() {
    return "Hello";
}

greet().then((message) => {
    console.log(message);
});

//with await
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}

async function display() {
    const result = await getData();
    console.log(result);
}

display();

//without await
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}

async function display() {
    console.log(getData());
}

display();