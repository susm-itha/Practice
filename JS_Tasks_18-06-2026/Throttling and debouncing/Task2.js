function throttle(func, delay) {
let lastCall = 0
return function () {
let now = Date.now()
if (now - lastCall >= delay) {
lastCall = now
func()
        }
    };
}
function handleScroll() {
console.log("Scroll Event:", new Date().toLocaleTimeString())
}
window.addEventListener("scroll", throttle(handleScroll, 1000))

//Debouncing
function debounce(func, delay) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func();
        }, delay);
    };
}

function searchData() {
    console.log("Searching:", document.getElementById("search").value);
}

document.getElementById("search")
.addEventListener("input", debounce(searchData, 1000));
