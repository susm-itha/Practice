function addItem() {
// Create a new paragraph
let para = document.createElement("p");
// Add text to paragraph
para.textContent = "My name was added in nyb.";
// Add paragraph to container
document.getElementById("container").appendChild(para);
console.log("Paragraph Added");
}
function removeItem() {
let container = document.getElementById("container");
// Check if any paragraph exists
if (container.lastChild) {
// Remove last added paragraph
container.removeChild(container.lastChild);
console.log("Paragraph Removed");
}
else {
console.log("No Paragraphs to Remove");
}
}
