// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners

function loadEventListener(){

  //Dom loader from LS
  document.addEventListener('DOMContentLoaded', getTasks);
 
  // Add task event
  form.addEventListener('submit', addTask );

  // Remove task
  taskList.addEventListener('click', removeTask);

  // Clear all task
  clearBtn.addEventListener('click', clearTask);

  //Filter the task
  filter.addEventListener('keyup', filterTask);



}

// Get tasks

function getTasks(){

  let tasksArr;

  if(localStorage.getItem('tasks') === null) {
    tasksArr = [];
  } else {
    tasksArr = JSON.parse(localStorage.getItem('tasks'));
  }

  tasksArr.forEach(function(task,index){
      // Create li element
      const li = document.createElement('li');

      // Add class
      li.className = 'collection-item';
    
      // create text node and appen to li
      
      li.appendChild(document.createTextNode(task));

      //create link element
      const link = document.createElement('a');

      //adding class
      link.className = 'delete-item secondary-content';

      // add icon html
      link.innerHTML = '<i class="fa fa-remove"></i>';
      
      // append to li
      li.appendChild(link);

      //apend li to the ul
      taskList.appendChild(li);
  })

}

function addTask (e){

  // Add Task
  if(taskInput.value === ''){
    alert('Add task');
  }

  // Create li element
  const li = document.createElement('li');

  // Add class
  li.className = 'collection-item';
 
  // create text node and appen to li
  li.appendChild(document.createTextNode(taskInput.value));

  //create link element
  const link = document.createElement('a');

  //adding class
  link.className = 'delete-item secondary-content';

  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  
  // append to li
  li.appendChild(link);

  //apend li to the ul
  taskList.appendChild(li);

  // Store task to LS

  storeTaskToLS(taskInput.value);

  //Clear input
  taskInput.value = '';


  e.preventDefault();
}
// Store task function LS
function storeTaskToLS(task){
  let tasksArr;

  if(localStorage.getItem('tasks') === null) {
    tasksArr = [];
  } else {
    tasksArr = JSON.parse(localStorage.getItem('tasks'));
  }
  tasksArr.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasksArr));
}



// Remove task
function removeTask(e){

if(e.target.parentElement.classList.contains('delete-item')){
e.target.parentElement.parentElement.remove();

removeTaskFromLS(e.target.parentElement.parentElement);
  }
}

// remove task from local storage

function removeTaskFromLS(taskItem){
  let tasksArr;

  if(localStorage.getItem('tasks') === null) {
    tasksArr = [];
  } else {
    tasksArr = JSON.parse(localStorage.getItem('tasks'));
  }

  tasksArr.forEach(function(cur,index){
    if(taskItem.textContent === cur){
      tasksArr.splice(index, 1);
    }

  })

  localStorage.setItem('tasks', JSON.stringify(tasksArr));

}

// Clear Task
function clearTask(){
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild)
  }
}

// Filter over tasks
function filterTask(e){
const text = e.target.value.toLowerCase();

document.querySelectorAll('.collection-item').forEach(task =>{

  const item = task.firstChild.textContent;

  if(item.toLowerCase().indexOf(text) != -1){
    task.style.display = 'block';
  }else {
    task.style.display = 'none';
  }

})

}


loadEventListener();