const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

//Timer Function 

function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent =
        now.toLocaleTimeString();
}

setInterval(updateClock, 1000);

//Callback Function 
function addTaskCallback(taskText, callback) {

    const li = document.createElement("li");

    li.innerHTML = `
        ${taskText}
        <button class="complete">Complete</button>
        <button class="delete">Delete</button>
    `;

    taskList.appendChild(li);

    callback();
}

//Promise 

function saveTask(task) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (task) {
                resolve("Task Saved Successfully");
            } else {
                reject("Task Save Failed");
            }

        }, 1000);

    });
}

//Event Handling

addBtn.addEventListener("click", () => {

    const task = taskInput.value.trim();

    if (!task) {
        alert("Enter a task");
        return;
    }

    saveTask(task)
        .then((message) => {

            console.log(message);

            addTaskCallback(task, () => {
                console.log("Callback Executed");
            });

            taskInput.value = "";
        })
        .catch((error) => {
            console.log(error);
        });
});

//Event Delegation 

taskList.addEventListener("click", (event) => {

    if (event.target.classList.contains("delete")) {

        event.target.parentElement.remove();
    }

    if (event.target.classList.contains("complete")) {

        event.target.parentElement.classList.toggle("completed");
    }
});
