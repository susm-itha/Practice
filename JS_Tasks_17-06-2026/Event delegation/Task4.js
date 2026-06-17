let container = document.getElementById("container");
let addBtn = document.getElementById("addBtn");
// Event Delegation
container.addEventListener("click", function(event) {
if(event.target.tagName === "BUTTON") {
console.log(event.target.textContent + " clicked");
}
});
// Add Dynamic Button
let count = 3;
addBtn.addEventListener("click", function() {
let newButton = document.createElement("button");
newButton.textContent = "Button " + count;
container.appendChild(newButton);
count++;
});