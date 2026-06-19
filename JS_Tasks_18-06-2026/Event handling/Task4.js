//Event Handling
document.getElementById("search").addEventListener("input", () => {
    console.log("Input event triggered");
});

//Throttled Event Handling
function throttle(func, delay) {
    let lastCall = 0;

    return function () {
        let now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            func();
        }
    };
}

window.addEventListener(
    "scroll",
    throttle(() => {
        console.log("Scroll event triggered");
    }, 1000)
);

//Debounced Event Handling
function debounce(func, delay) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func();
        }, delay);
    };
}

document.getElementById("search").addEventListener(
    "input",
    debounce(() => {
        console.log("Searching...");
    }, 1000)
);
