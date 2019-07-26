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
  // Remove task event
  taskList.addEventListener("click", removeTask);
  // Clear task evenets
  clearBtn.addEventListener("click", clearTask);
  // Fiter tasks event

  filter.addEventListener("keyup", filterTask);
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
  link.className = "delete-item secondary-content";
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

// Remove Task

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear task

function clearTask(e) {
  // taskList.innerHtml = "";
  // Faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  // innerHTML Vs remove child https://jsperf.com/innerhtml-vs-removechild/47
}

function filterTask(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
