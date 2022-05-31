const BASE_URL = "http://localhost:6011/";

var newTask = document.querySelector('#new-task');
var newTimeField = document.querySelector('#new-time-field');
var addTaskBtn = document.querySelector('#addTask');

var toDoUl = document.querySelector(".todo-list ul");
var completeUl =  document.querySelector(".complete-list ul");
let addGotTasksUl = document.getElementById("add-got-tasks-ul")

let todos = [];

const getTodoOptions = (item) => {
    var listItem = document.createElement("li"); 
    var checkBox = document.createElement("input"); 
    var label = document.createElement("label"); 

    let totalDescription = `${item.title} ${item.time}`
    label.innerText = totalDescription;
    
    checkBox.type = "checkbox";
    
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    return listItem;  
}

(async function getToDos() {
    const res = await fetch(`${BASE_URL}todos`);
    todos = await res.json();
    console.log(todos)
    
    todos.forEach((item, index) => {
        item.id = index;
        item.status ? completeUl.append(getTodoOptions(item)) : toDoUl.append(getTodoOptions(item));
    })
    
})(); 

var createNewTask = function(task, time){
  console.log("Creating task...");
  
  var listItem = document.createElement("li"); 
  var checkBox = document.createElement("input"); 
  var label = document.createElement("label"); 
  
  let totalDescription = `${task} ${time}`
  label.innerText = totalDescription;
  
  checkBox.type = "checkbox";
  
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  return listItem;  
};

var addTask = function(){
    if(newTask.value.length === 0 || newTimeField.value.length === 0){
        alert("Please fill all fields!")
    return;
    }
    try {
        fetch(`${BASE_URL}toDos`, {method: "POST", body: JSON.stringify({
            title: newTask.value, 
            time: newTimeField.value,
            status: false }),
        headers: { "Content-Type": "application/json" }})
      } catch (e) {
          console.log(e.message);
    };
    let listItem = createNewTask(newTask.value, newTimeField.value);
    toDoUl.appendChild(listItem); 
    newTask.value = "";
    newTimeField.value = ""

    bindIncompleteItems(listItem, completeTask);
};

var completeTask = function(){
  var listItem = this.parentNode;
  
  var deleteBtn = document.createElement("button"); 
  deleteBtn.innerText ="Delete"; 
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);
  
  var checkBox = listItem.querySelector("input[type=checkbox]");
  checkBox.remove();
  completeUl.appendChild(listItem); 
  
  bindCompleteItems(listItem, deleteTask);
  
};

var deleteTask = function(){
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  
  ul.removeChild(listItem);
  
};

var bindIncompleteItems = function(taskItem, checkBoxClick){  
  var checkBox = taskItem.querySelector("input[type=checkbox]");
  
  checkBox.onchange = checkBoxClick;  
}; 

var bindCompleteItems = function(taskItem, deleteButtonPress){
/* 
    console.log(taskItem)
    try {
        fetch(`${BASE_URL}toDos/`, {method: "PUT", body: JSON.stringify({
            id: 1,
            title: todos[1].title, 
            time: newTimeField.value,
            status: true }),
        headers: { "Content-Type": "application/json" }})
      } catch (e) {
          console.log(e.message);
    }; */
  
  var deleteButton = taskItem.querySelector(".delete");
   
  deleteButton.onclick = deleteButtonPress;
    
};

setTimeout(() => {
    for(var i=0; i < toDoUl.children.length; i++) {
      bindIncompleteItems(toDoUl.children[i], completeTask);
    }
    for(var i=0; i < completeUl.children.length; i++) {
        bindCompleteItems(completeUl.children[i], deleteTask);
      }
}, 200)


addTaskBtn.addEventListener("click", addTask);

