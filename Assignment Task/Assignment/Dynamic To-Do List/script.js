
document.addEventListener("DOMContentLoaded", loadTasks);

document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    createTaskElement(taskText);
    saveTask(taskText);

    taskInput.value = "";
}


function createTaskElement(taskText) {
    const ul = document.getElementById("taskList");

    const li = document.createElement("li");

    const textNode = document.createElement("span");
    textNode.textContent = taskText;
    li.appendChild(textNode);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
        const newTask = prompt("Edit task:", textNode.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            updateTask(textNode.textContent, newTask.trim());
            textNode.textContent = newTask;
        }
    };

   
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        ul.removeChild(li);
        deleteTask(taskText);
    };

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    ul.appendChild(li);
}


function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => createTaskElement(task));
}

function deleteTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTask(oldTask, newTask) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const index = tasks.indexOf(oldTask);
    tasks[index] = newTask;
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
