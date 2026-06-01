// getting elements from HTML
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
const filterBtns = document.querySelectorAll(".filter-btn");

// tasks saved in local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// default filter
let currentFilter = "all";


// save tasks
function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// display tasks
function showTasks(){

    taskList.innerHTML = "";

    let filteredTasks = [];

    if(currentFilter === "all"){
        filteredTasks = tasks;
    }

    if(currentFilter === "active"){
        filteredTasks = tasks.filter(function(task){
            return task.completed === false;
        });
    }

    if(currentFilter === "completed"){
        filteredTasks = tasks.filter(function(task){
            return task.completed === true;
        });
    }

    // if no tasks found
    if(filteredTasks.length === 0){

        let emptyTask = document.createElement("li");
        emptyTask.textContent = "No tasks available";
        taskList.appendChild(emptyTask);

        return;
    }

    // create task items
    filteredTasks.forEach(function(task){

        let li = document.createElement("li");

        if(task.completed){
            li.classList.add("completed");
        }

        // task text
        let taskText = document.createElement("span");
        taskText.textContent = task.text;

        // complete button
        let completeBtn = document.createElement("button");

        if(task.completed){
            completeBtn.textContent = "Undo";
        }else{
            completeBtn.textContent = "Complete";
        }

        completeBtn.addEventListener("click", function(){

            task.completed = !task.completed;

            saveTasks();
            showTasks();

        });

        // delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function(){

            tasks = tasks.filter(function(item){
                return item.id !== task.id;
            });

            saveTasks();
            showTasks();

        });

        li.appendChild(taskText);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

    });

}


// add task button
addBtn.addEventListener("click", function(){

    let text = taskInput.value.trim();

    if(text === ""){
        alert("Please enter a task");
        return;
    }

    let task = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(task);

    saveTasks();

    taskInput.value = "";

    showTasks();

});


// filter buttons
filterBtns.forEach(function(btn){

    btn.addEventListener("click", function(){

        currentFilter = btn.dataset.filter;

        filterBtns.forEach(function(button){
            button.classList.remove("active");
        });

        btn.classList.add("active");

        showTasks();

    });

});


// load tasks when page opens
window.addEventListener("DOMContentLoaded", function(){

    showTasks();

});