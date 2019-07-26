// Deine UI Vars

const form = document.querySelector("form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners

loadEventListeners();

function loadEventListeners() {
  // Add task event
  form.addEventListener("submit", addTask);
}

// Add task

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  // Create li elements

  const li = document.createElement("li");
  li.className = "collection-item";

  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element

  const link = document.createElement("a");
  link.className = "delet-item secondary-content";
  // Add icon html
  link.innerHTML = "<i class='fa fa-remove'></i>";
  // Append link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear the input
  taskInput.value = "";

  e.preventDefault();
}
