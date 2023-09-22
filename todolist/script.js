// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${taskText}
            <button class="delete-button" onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}

// Function to remove a task
function removeTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}