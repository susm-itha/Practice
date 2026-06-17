function startTimer() {
let time = document.getElementById("seconds").value;
let display = document.getElementById("timer");
display.textContent = time;
let countdown = setInterval(function () {
time--;
display.textContent = time;
console.log("Remaining:", time);
if (time <= 0) {
clearInterval(countdown);
display.textContent = "Time's Up!";
console.log("Timer Finished");
}
}, 1000);
}