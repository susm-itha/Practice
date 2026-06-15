let input = document.getElementById("nameInput");
let button = document.getElementById("btn");
let box = document.getElementById("box");
let result = document.getElementById("result");
// 1. Input Event
input.addEventListener("input", function() {
console.log("Input Value:", input.value);
result.textContent = "Typing: " + input.value;
});
// 2. Button Click Event
button.addEventListener("click", function() {
alert("Button Clicked!");
console.log("Button was clicked");
});
// 3. Mouse Over Event
box.addEventListener("mouseover", function() {
box.style.backgroundColor = "yellow";
box.textContent = "Mouse Entered";
console.log("Mouse entered the box");
});
// 4. Mouse Out Event
box.addEventListener("mouseout", function() {
box.style.backgroundColor = "lightblue";
box.textContent = "Move Mouse Here";
console.log("Mouse left the box");
});
