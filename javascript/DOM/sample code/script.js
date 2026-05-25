let totalAssignedTasks = 10;
let completedTasks = 4;


let remainingTasks = totalAssignedTasks - completedTasks;
console.log("Tasks left to do:", remainingTasks);


completedTasks = completedTasks + 1;
remainingTasks = totalAssignedTasks - completedTasks;

console.log("Updated tasks left to do:", remainingTasks);