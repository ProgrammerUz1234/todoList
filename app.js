// Get references to the DOM elements
const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Add event listener to the "Add Task" button
addBtn.addEventListener("click", addTask);

// Function to add a task
function addTask() {
  const taskText = todoInput.value.trim();

  if (taskText !== "") {
    // Create a new list item (li)
    const li = document.createElement("li");

    // Add the task text to the li element
    li.textContent = taskText;

    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Add click event to delete the task
    deleteBtn.addEventListener("click", function () {
      todoList.removeChild(li);
    });

    // Add click event to mark the task as complete
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    // Append the delete button to the list item (li)
    li.appendChild(deleteBtn);

    // Add the new task to the todo list
    todoList.appendChild(li);

    // Clear the input field after adding the task
    todoInput.value = "";
  } else {
    alert("Please enter a task");
  }
}
