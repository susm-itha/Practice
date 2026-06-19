// Click Event
document.getElementById("btn").addEventListener("click", function () {
document.getElementById("clickResult").textContent =
"Button Clicked!";
});

// Input Event
document.getElementById("nameInput").addEventListener("input", function () {
document.getElementById("inputResult").textContent =
"You typed: " + this.value;
});

// Change Event
document.getElementById("course").addEventListener("change", function () {
document.getElementById("changeResult").textContent =
"Selected Course: " + this.value;
});
// Submit Event
document.getElementById("myForm").addEventListener("submit", function (event) {
event.preventDefault(); // Prevent page refresh
document.getElementById("submitResult").textContent =
"Form Submitted Successfully!";
});
