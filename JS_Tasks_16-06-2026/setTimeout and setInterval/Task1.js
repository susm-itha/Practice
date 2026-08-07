//setTimerout
setTimeout(function () {
    document.getElementById("demo").textContent = "Hello after 3 seconds!";
    console.log("Message displayed after 3 seconds");
}, 3000);
    
//setInterval
let number = 0;
setInterval(function () {
    number++;
    document.getElementById("count").textContent = number;
    console.log("Count:", number)
}, 1000);