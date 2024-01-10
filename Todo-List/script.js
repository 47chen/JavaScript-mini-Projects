// TODO 1: get DOM elements for reference
let listContainer = document.querySelector("[data-list-container]");
let input = document.querySelector("[data-input]");
const LOCAL_STORAGE_KEY = "todo.lists";

let todoLists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

function render() {
  listContainer.innerHTML = "";
  // why we set this to empty string?
  // because we want to clear the listContainer before we render the new todo
  todoLists.forEach((todo) => {
    let newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todo;
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    newTodo.appendChild(span);
    listContainer.appendChild(newTodo);
  });
}

function clearInput() {
  input.value = "";
}

function addTodo() {
  if (input.value === "") {
    alert("You must write something!");
    return;
  }
  todoLists.push(input.value);
  clearInput();
  save();
  render();
}

render();
// TODO 4: delete todo function -- use span to delete todo

function save() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoLists));
}
