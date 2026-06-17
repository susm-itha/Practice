let parent = document.getElementById("parent")
let child = document.getElementById("child")
// Capturing phase
parent.addEventListener("click", function () {
console.log("Parent Clicked")
}, true)
child.addEventListener("click", function () {
console.log("Button Clicked")
}, true)