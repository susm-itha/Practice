//clearTimeout
let timer = setTimeout(function () {
        console.log("This message will not appear.");
    }, 5000);

    setTimeout(function () {
        clearTimeout(timer);
        console.log("Timeout cancelled successfully.");
    }, 2000);

//clearInterval
let count = 1;

    let interval = setInterval(function () {
        console.log("Count:", count);
        count++;
    }, 1000);

    setTimeout(function () {
        clearInterval(interval);
        console.log("Interval stopped.");
    }, 5000);