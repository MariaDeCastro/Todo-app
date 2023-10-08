//get the html elements

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

//create a task counter

let taskId = 1;

//function to add a new task

function addTask(event) {
    //Para prevenir que se refresque la pagina y mantener los datos.
    event.preventDefault();
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskItem = document.createElement('li');

        taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class='delete-btn'>Delete</button>`;

        taskList.append(taskItem);

        taskInput.value = "";
        taskId++;

        //add event to the delete button

        const deleteBtn = taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', deleteTask)
    }
}

function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
}

//add event listener to the form.

taskForm.addEventListener('submit', addTask);


