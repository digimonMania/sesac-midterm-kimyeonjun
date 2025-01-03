document.addEventListener("DOMContentLoaded", getTodos);
function getTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => data.slice(0, 10).forEach(addTodoToDOM));
}

function addTodoToDOM(todo) {
  const ul = document.getElementById("todo-list");
  const li = document.createElement("li");
  li.textContent = todo.title;
  li.appendChild(createDeleteButton());
  li.appendChild(createCompleteCheckbox());
  ul.appendChild(li);
}

function addTodo() {
  const input = document.getElementById("todo-input");
  const value = input.value.trim();
  if (value) {
    addTodoToDOM({ title: value });
    input.value = "";
  }
}

function createDeleteButton() {
  const button = document.createElement("button");
  button.textContent = "x";
  button.onclick = function () {
    button.parentElement.remove();
  };
  return button;
}

function createCompleteCheckbox() {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onchange = function () {
    checkbox.parentElement.classList.toggle("completed", checkbox.checked);
  };
  return checkbox;
}
