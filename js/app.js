// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners

function loadEventListener(){
  // Add task event
  form.addEventListener('submit', addTask );

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

  taskInput.value = '';


  e.preventDefault();
}

loadEventListener();