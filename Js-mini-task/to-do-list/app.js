let taskInput = document.querySelectorAll(".text-input")[0];
let taskList = document.querySelectorAll(".taskList")[0];

function taskAdd() {
    let taskText = taskInput.value.toLowerCase();
    if(taskText === "") return;

    taskList.innerHTML += `
    <li> 
    <input type = "checkbox" class = "check" onchange = "taskCheck(this)">
    <span>${taskText}</span>
    <button class = "delete" onclick= "deleteTask(this)"> Delete </button>  
    </li>
    `;

    taskInput.value = ""
}

function taskCheck(checkbox) {
    let taskItem = checkbox.nextElementSibling; 
    if (checkbox.checked) {
        taskItem.style.color = "gray"; 
        taskItem.style.textDecoration = "line-through"; 
    } else {
        taskItem.style.color = "black"; 
        taskItem.style.textDecoration = "none"; 
    }
}

function deleteTask(button){
    let delTask = button.parentElement;
    delTask.remove()
}