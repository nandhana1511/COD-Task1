function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", toggleTask); 
        var deleteButton = document.createElement("delete-button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", deleteTask);
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskText));
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
        saveData(taskList);
    }
    else{
        alert("Please enter a task!!");
    }
}

function toggleTask(event) {
    var listItem = event.target.parentNode;
    listItem.classList.toggle("checked");
    saveData(listItem.parentNode);
}

function deleteTask(event) {
    var listItem = event.target.parentNode;
    var confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
        listItem.remove();
        saveData(listItem.parentNode);
    }
}

function saveData(taskList)
{
    localStorage.setItem("data", taskList.innerHTML);
}
