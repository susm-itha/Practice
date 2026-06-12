//getElementById
let element = document.getElementById("title");
console.log(element.textContent);
//getElementsByClassName
let elements = document.getElementsByClassName("course");
console.log(elements[0].textContent);
console.log(elements[1].textContent);

//querySelector
let elementt = document.querySelector(".subject");
console.log(elementt.textContent);

//querySelectorAll
let elementss = document.querySelectorAll(".language");
elementss.forEach(function(item) {
    console.log(item.textContent);
});
