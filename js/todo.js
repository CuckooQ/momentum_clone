/* Parameter */
// div
const toDoForm = document.querySelector(".toDo_form");
const toDoInput = document.querySelector(".toDo_input");
const toDoUl = document.querySelector(".toDo_list");

// Todo input placeholder
const TODO_PLACEHOLDER = "해야 할 일을 써주세요!";

// localStorage toDo list key
const LS_TODO_KEY = "EYONG_MOMENTUM_TODO_LIST";

// toDoObj list
let toDoList = [];



/* Function */
// load todo list 
function loadTodo(){
    // get toDo list
    const toDoStr = localStorage.getItem(LS_TODO_KEY);

    if(toDoStr){
        // paint toDo 
        toDoList = JSON.parse(toDoStr);
        toDoList.forEach((toDo)=>{
            paintToDo(toDo);
        });
    }
}

// click action of todo
function handleToDoClick(event){
    const li = event.target;
    
    // remove from ul
    toDoUl.removeChild(li);

    // remove from localStorage
    toDoList = toDoList.filter((toDo)=> toDo.id !== Number(li.id));
    saveTodo(JSON.stringify(toDoList));
}

// paint todo
function paintToDo(toDo){
    // create li
    const li = document.createElement("li");
    li.id = toDo.id;
    li.innerHTML = toDo.text;
    li.addEventListener("click", handleToDoClick);

    // append li to ul
    toDoUl.appendChild(li);
}

// save todo into localStorage
function saveTodo(todoList){
    localStorage.setItem(LS_TODO_KEY, todoList);
}

// add toDo item into list
function addToDo(){
    // get ToDo
    const toDo = toDoInput.value;
    const id = toDoList.length + 1;

    // add item into list
    const toDoObj = {
        id,
        text: toDo,
    }
    toDoList.push(toDoObj);

    // save toDo
    saveTodo(JSON.stringify(toDoList));

    // paint toDo
    paintToDo(toDoObj);

    toDoInput.value = ""; 
}

// submit action of todo form  
function handleSubmit(event){
    event.preventDefault();
    addToDo();
}

// work when loaded
function init(){
    toDoInput.placeholder = TODO_PLACEHOLDER;
    toDoForm.addEventListener("submit", handleSubmit);
    loadTodo();
}



/* Operate function */
init();