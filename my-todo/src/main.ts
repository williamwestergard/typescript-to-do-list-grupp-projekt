//Importerar Todo from Types.ts
import type { Todo } from "./Types";


let todos: Todo[] = [];

const input = document.querySelector<HTMLInputElement>("#new-todo")!;
const addButton = document.querySelector<HTMLButtonElement>("#add-btn")!;
const list = document.querySelector<HTMLUListElement>("#todo-list")!;

// Ritar ut listan
function renderTodos() {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    li.style.textDecoration = todo.completed ? "line-through" : "none";

    li.addEventListener("click", () => {
      todo.completed = !todo.completed;
      renderTodos();
    });

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "x";
    delBtn.addEventListener("click", () => {
      todos = todos.filter((t) => t.id !== todo.id);
      renderTodos();
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

// Lägg till nytt task
addButton.addEventListener("click", () => {
  if (!input.value.trim()) return;

  const newTodo: Todo = {
    id: Date.now(),
    text: input.value,
    completed: false,
  };

  todos.push(newTodo);
  input.value = "";
  renderTodos();
});