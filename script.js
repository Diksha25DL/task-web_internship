// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const newTask = document.createElement("li");
    newTask.textContent = taskInput.value;
    taskList.appendChild(newTask);

    // Clear the input field after adding the task
    taskInput.value = "";
}

// Event listener for the "Enter" key to add a task
document.getElementById("taskInput").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
