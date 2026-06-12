//Modifying DOM
let element = document.getElementById("heading");

element.textContent = "Welcome to DOM";

//reading and modifying 
let paragraph = document.getElementById("para");

// Read property
console.log(paragraph.textContent);

// Modify property
paragraph.textContent = "Learning JavaScript DOM";