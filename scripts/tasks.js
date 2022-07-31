const input_Task = document.getElementById("registerTask");
const add_Task = document.getElementById("add-btn");
const task_Content = document.getElementById("tasksContent");

// const show_hidden = document.getElementById("show&hidden");


function validateTask() {
    if (input_Task.value) {
        return true
    }
}

function addTask() {
    task_Content.innerHTML += `<div class="task-box">${input_Task.value} <input type="checkbox" class="task-checkbox"id=""></div>`
}


function submit() {
    if (validateTask()) {
        input_Task.innerText = input_Task
        console.log(input_Task.value)
        addTask()
    }
}