function showDetails() {

// Select element
let secondPara = document.getElementById("second");

// Parent Node
console.log("Parent Node:");
console.log(secondPara.parentElement);

// Previous Sibling
console.log("Previous Sibling:");
console.log(secondPara.previousElementSibling);

// Next Sibling
console.log("Next Sibling:");
console.log(secondPara.nextElementSibling);

// Child Nodes
let parentDiv = document.getElementById("parent");
console.log("First Child:");
console.log(parentDiv.firstElementChild);
console.log("Last Child:");
console.log(parentDiv.lastElementChild);
console.log("All Children:");
console.log(parentDiv.children);
}