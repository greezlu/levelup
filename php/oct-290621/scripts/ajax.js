function getAllTasks () {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/task/ajax');
    xhr.send();
    xhr.onload = function() {
        if (xhr.status == 200) {
            let response = xhr.responseText;
            let tasks = JSON.parse(response);
            let tasksHtml = "<ul>";
            for (let i=tasks.length;i--;) {

                tasksHtml += "<li>" + tasks[i]["name"] + "</li>";

            }
            tasksHtml += "</ul>";
            let tasksList = document.getElementById("tasksList");
            tasksList.innerHTML = tasksHtml;
        }
    };

}

let loadButton = document.getElementById("loadTasks");
loadButton.addEventListener("click", getAllTasks);

let createTaskForm = document.forms.taskCreate;
createTaskForm.onsubmit = function (event) {
    event.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/task/createtask');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("name=" + createTaskForm.elements.name.value);
    xhr.onload = function() {
        if (xhr.status == 200) {
            getAllTasks();
        }
    };

}

