import type { Todo } from "./Types";
 // Import the Todo interface using a type-only import

// Array to hold the list of todos
let todos: Todo[] = [];

const input = document.querySelector<HTMLInputElement>("#new-todo")!;
const addButton = document.querySelector<HTMLButtonElement>("#add-btn")!;
const list = document.querySelector<HTMLUListElement>("#todo-list")!;

// Render the todo list so it appears on screen
function renderTodos() {
  list.innerHTML = ""; // Clear the current list

  todos.forEach((todo) => { // Loop through each todo
    const li = document.createElement("li"); // Create a new list item
    li.textContent = todo.text; // Set the text of the list item


  // Edit button here //

    // Strike-through completed todos
    li.style.textDecoration = todo.completed ? "line-through" : "none";

    // Toggle completion when clicking on the todo
    li.addEventListener("click", () => {
      todo.completed = !todo.completed;
      renderTodos();
    });

    // Create delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "x";

    // Remove todo when clicking delete
    delBtn.addEventListener("click", () => {
      todos = todos.filter((t) => t.id !== todo.id);
      renderTodos();
    });

    li.appendChild(delBtn); // Add delete button to list item
    list.appendChild(li);   // Add list item to the ul
  });
}

// Add new todo
addButton.addEventListener("click", () => {
  if (!input.value.trim()) return; // Prevent adding empty todos

  const newTodo: Todo = {
    id: Date.now(),   // Unique ID using timestamp
    text: input.value, 
    completed: false, // New todos start as not completed
  };

  todos.push(newTodo); // Add new todo to the array
  input.value = "";    // Clear the input field
  renderTodos();       // Re-render the list
});