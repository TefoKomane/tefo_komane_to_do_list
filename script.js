// getting elements from HTML
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
const filterBtns = document.querySelectorAll(".filter-btn");

// Track selected colour
const colourSwatches = document.querySelectorAll(".colour-swatch");
let selectedColour = "#cccccc";

colourSwatches.forEach(function(swatch) {
    swatch.addEventListener("click", function() {
        colourSwatches.forEach(function(s) { s.classList.remove("selected"); });
        swatch.classList.add("selected");
        selectedColour = swatch.dataset.colour;
    });
});

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
        emptyTask.className = "empty-message";
        taskList.appendChild(emptyTask);
        return;
    }

    filteredTasks.forEach(function(task){

        let li = document.createElement("li");
        li.classList.add("task-item"); // ✅ enables flex row layout

        // colour tag: left border
        let tagColour = task.colour || "#cccccc";
        li.style.borderLeft = "5px solid " + tagColour;

        if(task.completed){
            li.classList.add("completed");
        }

        // colour tag: dot
        let dot = document.createElement("span");
        dot.className = "colour-dot";
        dot.style.background = tagColour;

        // task text
        let taskText = document.createElement("span");
        taskText.textContent = task.text;
        taskText.style.flex = "1"; // ✅ pushes buttons to the right

        // complete button
        let completeBtn = document.createElement("button");

        if(task.completed){
            completeBtn.textContent = "Undo";
            completeBtn.className = "archive-btn"; // ✅ orange styled class
        }else{
            completeBtn.textContent = "Complete";
            completeBtn.className = "complete-btn"; // ✅ green styled class
        }

        completeBtn.addEventListener("click", function(){
            task.completed = !task.completed;
            saveTasks();
            showTasks();
        });

        // delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn"; // ✅ red styled class

        deleteBtn.addEventListener("click", function(){
            tasks = tasks.filter(function(item){
                return item.id !== task.id;
            });
            saveTasks();
            showTasks();
        });

        // ✅ wrap buttons in a div for spacing
        let btnWrapper = document.createElement("div");
        btnWrapper.className = "task-buttons";
        btnWrapper.appendChild(completeBtn);
        btnWrapper.appendChild(deleteBtn);

        li.appendChild(dot);
        li.appendChild(taskText);
        li.appendChild(btnWrapper);
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
        completed: false,
        colour: selectedColour
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