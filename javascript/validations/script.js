document.getElementById("myForm").addEventListener("submit", function(event) {
  let username = document.getElementById("username").value;

  if (username.trim() === "") {
    alert("Name is required!");
    event.preventDefault(); 
  } else {
    alert("Success!");
  }
});

//input validations

let inputField = document.getElementById("myInput");
let errorText = document.getElementById("error");


inputField.addEventListener("input", function() {
  if (inputField.value.trim() === "") {
    errorText.textContent = "Input cannot be empty!";
  } else {
    errorText.textContent = ""; 
  }
});