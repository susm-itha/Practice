let grandparent = document.getElementById("grandparent");
let parent = document.getElementById("parent");
let child = document.getElementById("child");
 // Capturing Phase
grandparent.addEventListener("click", () => {
console.log("Grand Parent - Capturing");
}, true);
parent.addEventListener("click", () => {
console.log("Parent - Capturing");
}, true);
child.addEventListener("click", () => {
console.log("Child - Capturing");
}, true);
// Bubbling Phase
grandparent.addEventListener("click", () => {
console.log("Grand Parent - Bubbling");
});
parent.addEventListener("click", () => {
console.log("Parent - Bubbling");
});
child.addEventListener("click", () => {
console.log("Child - Bubbling");
});