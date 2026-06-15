let input = document.getElementById("taskInput");
let addButton = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
addButton.addEventListener("click", function () {
let taskText = input.value;
if (taskText === "") {
alert("Please enter a task");
return;
}
// Create list item
let li = document.createElement("li");
// Add task text
li.textContent = taskText;
// Create delete button
let deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.className = "deleteBtn";
// Delete task
deleteBtn.addEventListener("click", function () {
li.remove();
console.log("Task Deleted");
});
li.appendChild(deleteBtn);
taskList.appendChild(li);
console.log("Task Added:", taskText);
input.value = "";
});
